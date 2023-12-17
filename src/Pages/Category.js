import React, { useEffect, useState } from "react"
import Datatable from "../Components/Datatable/Datatable"
import CustomModal from "../Components/CustomModal/CustomModal"
import { Button, Col, Row } from "react-bootstrap"
import CategoryService from "../Services/CategoryService"

function Category() {

    const [input, setInput] = useState({})
    const [loading, setLoading] = useState(false)
    const [isModalOpened, setModalOpened] = useState(false)
    const [page, setPage] = useState(0)
    const [totalRecords, setTotalRecords] = useState(10)
    const [tableDatas, setTableDatas] = useState({
        headerInfos: [
            { title: "Id", width: "3%" },
            { title: "Category Name", width: "11%" },
            { title: "Category Code", width: "11%" },
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

        setInput({ code: item.code, id: item.id, nameEn: item.textList[0].messageValue, textListId: item.textList[0].id })        
        setModalOpened(true)
    }

    const handleSave = () => {
        let req = {
            "code": input.code,
            "textList": [
                {
                    "textType": "TITLE",
                    "messageValue": input.nameEn,
                    "lang": "EN"
                }
            ]
        }

        if (input.id !== "") {
            let tempTextList = [...req.textList]
            tempTextList[0].id = input.textListId
            req = { ...req, id: input.id, textList: tempTextList }
            CategoryService.update(req)
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
                })
        }
        else {
            CategoryService.create(req)
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
                })
        }

        handleClose()
    }

    const handleClose = () => {
        setInput({})    
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
                        "Id": item.id,
                        "Category Name": item.textList[0].messageValue,
                        "Category Code": item.code,
                        "Operations": {
                            isButton: true,
                            buttons: [
                                { icon: <button className="edit-button" onClick={() => { handleSelect(item) }}>Edit</button> }
                            ]
                        },
                    }]
                })
                setTableDatas({ ...tableDatas, bodyInfos: dataList })
            })
            .catch(err => {
                console.log(err)
            })
            .finally(f => {
                setLoading(true)
                setLoading(false)
            })

    }

    return (
        <div>
            <div>
                <Button style={{ marginBottom: "1rem" }} onClick={() => setModalOpened(true)}>Create Category</Button>
                <Datatable tableDatas={tableDatas} page={page} setPage={setPage} totalRecords={totalRecords}></Datatable>
            </div>

            <CustomModal handleClose={handleClose} isModalOpened={isModalOpened} setModalOpened={setModalOpened} handleSave={handleSave}>
                <Row>
                    <Col xs={4}><input className="modal-input" value={input.code} name="code" onChange={handleInputChange} placeholder="Code"></input></Col>
                    <Col xs={4}><input className="modal-input" value={input.nameEn} name="nameEn" onChange={handleInputChange} placeholder="En Name"></input></Col>
                </Row>
            </CustomModal>
        </div>
    )
}

export default Category