import React, { useEffect, useState } from "react"
import SearchField from "../Components/SearchField/SearchField"
import { Button, Col, Row } from "react-bootstrap"
import Datatable from "../Components/Datatable/Datatable"
import CustomModal from "../Components/CustomModal/CustomModal"
import TopicService from "../Services/TopicService"
import Dropdown from "../Components/Dropdown/Dropdown"
import ItemService from "../Services/ItemService"

function PItem() {

    const [input, setInput] = useState({ specs: [] })
    const [loading, setLoading] = useState(false)
    const [isModalOpened, setModalOpened] = useState(false)
    const [page, setPage] = useState(0)
    const [totalRecords, setTotalRecords] = useState(10)
    const [topics, setTopics] = useState([])
    const [selectedTopic, setSelectedTopic] = useState({})
    const [tableDatas, setTableDatas] = useState({
        headerInfos: [
            { title: "Id", width: "3%" },
            { title: "Item Name", width: "11%" },
            { title: "Topic", width: "11%" },
            { title: "Image", width: "11%" },
            { title: "Operations", width: "8%" }
        ],
        bodyInfos: [
            {
                "Id": "1",
                "Item Name": "BlueLock",
                "Topic": "1",
                "Image": "1",
                "Operations": {
                    isButton: true,
                    buttons: [
                        { icon: <button className="edit-button" onClick={() => { handleSelect() }}>Edit</button> }
                    ]
                },
            },
            {
                "Id": "2",
                "Topic Name": "Naruto",
                "Topic Category": "1",
                "Image": "1",
                "Operations": {
                    isButton: true,
                    buttons: [
                        { icon: <button className="edit-button" onClick={() => { handleSelect() }}>Edit</button> }
                    ]
                },
            },
        ]
    })

    useEffect(() => {
        loadData()
    }, [])

    const handleSelect = (item) => {
        let tempSpecs = []

        item.itemSpecs.forEach(sItem => {
            tempSpecs = [...tempSpecs, { value: sItem.itemContent[0].messageValue, id: sItem.id, cId: sItem.itemContent[0].id }]
        })
        setInput({ ...input, id: item.id, name: item.name, image: item.image, desc: item.itemDesc[0].messageValue, descId: item.itemDesc[0].id, specs: tempSpecs })
        setSelectedTopic({ key: item.topic.id, value: item.topic.name })
        setModalOpened(true)
    }

    const handleSave = () => {
        let tempSpecs = []
        let tempDesc = []
        let req = {}
        if (!input.id) {
            tempDesc = [
                {
                    "textType": "DETAIL",
                    "messageValue": input.desc,
                    "lang": "EN",
                }
            ]

            input.specs.forEach((sItem, index) => {
                tempSpecs = [...tempSpecs, {
                    "itemContent": [
                        {
                            "textType": "SPEC",
                            "messageValue": sItem.value,
                            "lang": "EN"
                        }
                    ],
                    "itemOrder": index
                }]
            })
        }
        else {
            req = { ...req, id: input.id }
            input.specs.forEach((sItem, index) => {
                tempSpecs = [...tempSpecs, {
                    "itemContent": [
                        {
                            "textType": "SPEC",
                            "messageValue": sItem.value,
                            "lang": "EN",
                            "id": sItem.cId
                        }
                    ],
                    "itemOrder": index,
                    "id": sItem.id
                }]
            })

            tempDesc = [
                {
                    "textType": "DETAIL",
                    "messageValue": input.desc,
                    "lang": "EN",
                    "id": input.descId

                }
            ]
        }

        req = {
            ...req,
            "name": input.name,
            "image": input.image,
            "itemDesc": tempDesc,
            "topic": {
                "id": selectedTopic.key
            },
            "itemSpecs": tempSpecs
        }

        if (input.id) {
            ItemService.update(req)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(f => {
                    setLoading(true)
                    setLoading(false)
                    loadData()
                    handleClose()
                })
        }
        else {
            ItemService.create(req)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(f => {
                    setLoading(true)
                    setLoading(false)
                    loadData()
                    handleClose()
                })
        }
    }

    const handleClose = () => {
        setInput({})
        setSelectedTopic({})
        setModalOpened(false)
    }

    const handleInputChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSpecInputChange = (e, index) => {
        let tempSpecs = [...input.specs]
        tempSpecs[index] = { ...tempSpecs[index], value: e.target.value }
        setInput({ ...input, specs: tempSpecs })
    }

    const loadData = () => {
        TopicService.query()
            .then(res => {
                let dataList = []
                res?.data?.data?.itemList.forEach(item => {
                    dataList = [...dataList, {
                        "key": item.id,
                        "value": item.name,
                    }]

                    setTopics(dataList)
                })
            })
            .catch(err => {
                console.log(err)
            })
            .finally(f => {
                setLoading(true)
                setLoading(false)
            })

        ItemService.query()
            .then(res => {
                let dataList = []
                res?.data?.data?.itemList.forEach(item => {
                    dataList = [...dataList, {
                        "Id": item.id,
                        "Item Name": item.name,
                        "Topic": item.topic.name,
                        "Image": item.image,
                        "Operations": {
                            isButton: true,
                            buttons: [
                                { icon: <button className="edit-button" onClick={() => { handleSelect(item) }}>Edit</button> }
                            ]
                        },
                    }]

                    setTableDatas({ ...tableDatas, bodyInfos: dataList })
                })
            })
            .catch(err => {
                console.log(err)
            })
            .finally(f => {
                setLoading(true)
                setLoading(false)
            })
    }

    const changeDropdownValue = (item) => {
        setSelectedTopic(item.item)
    }

    return (
        <div>
            <div style={{ marginBottom: "1rem" }}>
                <SearchField>
                    <Row>
                        <Col xs={4}>1 of 1</Col>
                        <Col xs={4}>1 of 1</Col>
                        <Col xs={4}>1 of 1</Col>
                        <Col xs={4}>1 of 1</Col>
                        <Col xs={4}>1 of 1</Col>
                        <Col xs={4}>1 of 1</Col>
                    </Row>
                </SearchField>
            </div>
            <div>
                <Button style={{ marginBottom: "1rem" }} onClick={() => setModalOpened(true)}>Create Item</Button>
                <Datatable tableDatas={tableDatas} page={page} setPage={setPage} totalRecords={totalRecords}></Datatable>
            </div>

            <CustomModal handleClose={handleClose} isModalOpened={isModalOpened} setModalOpened={setModalOpened} handleSave={handleSave}>
                <Row>
                    <Col xs={6}><input className="modal-input" value={input.name} name="name" onChange={handleInputChange} placeholder="Item Name"></input></Col>
                    <Col xs={6}><Dropdown setSelectedItem={(item) => { changeDropdownValue(item) }} optionList={topics} selectedItem={selectedTopic.key} /></Col>
                    <Col xs={6}><input className="modal-input" value={input.image} name="image" onChange={handleInputChange} placeholder="Image"></input></Col>
                    <Col xs={6}><textarea className="modal-input" value={input.desc} name="desc" onChange={handleInputChange} placeholder="Desc"></textarea ></Col>

                    <Button onClick={() => {
                        let tempSpecs = [...input.specs, ""]
                        setInput({ ...input, specs: tempSpecs })
                    }}>Add Specs</Button>
                    <hr></hr>
                    {
                        input?.specs?.map((item, index) =>
                            <Col xs={3}><input className="modal-input" value={item?.value} onChange={(e) => { handleSpecInputChange(e, index) }} placeholder="Spec"></input></Col>
                        )
                    }
                </Row>
            </CustomModal>
        </div>
    )
}

export default PItem