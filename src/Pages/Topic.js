import React, { useEffect, useState } from "react"
import Datatable from "../Components/Datatable/Datatable"
import CustomModal from "../Components/CustomModal/CustomModal"
import { Button, Col, Row } from "react-bootstrap"
import CategoryService from "../Services/CategoryService"
import TopicService from "../Services/TopicService"
import Dropdown from "../Components/Dropdown/Dropdown"

function Topic() {

    const [input, setInput] = useState({})
    const [loading, setLoading] = useState(false)
    const [isModalOpened, setModalOpened] = useState(false)
    const [page, setPage] = useState(0)
    const [totalRecords, setTotalRecords] = useState(10)
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState({})
    const [status, setStatus] = useState({})
    const options = {
        topicStatus: [
            {
                "key": "ONCOMING",
                "value": "ONCOMING"
            },
            {
                "key": "ONROLL",
                "value": "ONROLL"
            },
            {
                "key": "ENDED",
                "value": "ENDED"
            },
            {
                "key": "OVER",
                "value": "OVER"
            }
        ]
    }
    const [tableDatas, setTableDatas] = useState({
        headerInfos: [
            { title: "Id", width: "3%" },
            { title: "Topic Name", width: "11%" },
            { title: "Topic Category", width: "11%" },
            { title: "Image", width: "11%" },
            { title: "Status", width: "11%" },
            { title: "Operations", width: "8%" }
        ],
        bodyInfos: [
        ]
    })

    useEffect(() => {
        loadData()
    }, [])

    const handleSelect = (item) => {
        //call service
        setInput({ ...input, id: item.id, name: item.name, image: item.image })
        setSelectedCategory({ key: item.category[0].id, value: item.category[0].textList[0].messageValue })
        setStatus({ key: item.status, value: item.status })
        setModalOpened(true)
    }

    const handleSave = () => {
        let req = {
            "name": input.name,
            "image": input.image,
            "status": status.key,
            "topicCategories": [
                {
                    "category": {
                        "id": selectedCategory.key
                    }
                }
            ]
        }

        if (input.id) {
            req = { ...req, id: input.id }
            TopicService.update(req)
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
            TopicService.create(req)
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
        setStatus({})
        setSelectedCategory({})
        setModalOpened(false)
    }

    const handleInputChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const loadData = () => {
        CategoryService.query()
            .then(res => {
                let dataList = []
                res?.data?.data?.itemList.forEach(item => {
                    dataList = [...dataList, {
                        "key": item.id,
                        "value": item.textList[0].messageValue,
                    }]
                })
                setCategories(dataList)
                console.log(dataList)
            })
            .catch(err => {
                console.log(err)
            })

        TopicService.query()
            .then(res => {
                let dataList = []
                res?.data?.data?.itemList.forEach(item => {
                    dataList = [...dataList, {
                        "Id": item.id,
                        "Topic Name": item.name,
                        "Topic Category": item.category[0].textList[0].messageValue,
                        "Image": item.image,
                        "Status": item.status,
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
        setSelectedCategory(item.item)
    }

    const changeStatusValue = (item) => {
        setStatus(item.item)
    }

    return (
        <div>
            <div>
                <Button style={{ marginBottom: "1rem" }} onClick={() => setModalOpened(true)}>Create Topic</Button>
                <Datatable tableDatas={tableDatas} page={page} setPage={setPage} totalRecords={totalRecords}></Datatable>
            </div>

            <CustomModal handleClose={handleClose} isModalOpened={isModalOpened} setModalOpened={setModalOpened} handleSave={handleSave}>
                <Row>
                    <Col xs={6}><input className="modal-input" value={input.name} name="name" onChange={handleInputChange} placeholder="Topic Name"></input></Col>
                    <Col xs={6}><Dropdown setSelectedItem={(item) => { changeDropdownValue(item) }} optionList={categories} selectedItem={selectedCategory.key} /></Col>
                    <Col xs={6}><input className="modal-input" value={input.image} name="image" onChange={handleInputChange} placeholder="Image"></input></Col>
                    <Col xs={6}><Dropdown setSelectedItem={(item) => { changeStatusValue(item) }} optionList={options.topicStatus} selectedItem={status.key} /></Col>
                </Row>
            </CustomModal>
        </div>
    )
}

export default Topic