import React, { useEffect, useState } from "react"
import SearchField from "../Components/SearchField/SearchField"
import { Button, Col, Row } from "react-bootstrap"
import Datatable from "../Components/Datatable/Datatable"
import CustomModal from "../Components/CustomModal/CustomModal"

function Pickdler() {

    const [input, setInput] = useState({ specs: [] })
    const [loading, setLoading] = useState(false)
    const [isModalOpened, setModalOpened] = useState(false)
    const [page, setPage] = useState(0)
    const [totalRecords, setTotalRecords] = useState(10)
    const [categories, setCategories] = useState([])
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

    useEffect(() => {
        console.log(input)
    }, [input])

    const handleSelect = (item) => {
        //call service
        setModalOpened(true)
    }

    const handleSave = () => {
        //check controlls
        //call service

        handleClose()
    }

    const handleClose = () => {
        setInput({
            text1: "",
            text2: ""
        })
        setModalOpened(false)
    }

    const handleInputChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSpecInputChange = (e, index) => {
        let tempSpecs = [...input.specs]
        tempSpecs[index] = e.target.value
        setInput({ ...input, specs: tempSpecs })
    }

    const loadData = () => {
        //get all categories
        //get all topics
        setCategories([])
        setLoading(true)
        setLoading(false)
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
                    <Col xs={6}><input className="modal-input" value={input.text1} name="text1" onChange={handleInputChange} placeholder="Item Name"></input></Col>
                    <Col xs={6}><input className="modal-input" value={input.text1} name="text1" onChange={handleInputChange} placeholder="Topic"></input></Col>
                    <Col xs={6}><input className="modal-input" value={input.text1} name="text1" onChange={handleInputChange} placeholder="Image"></input></Col>
                    <Col xs={6}><textarea className="modal-input" value={input.text1} name="text1" onChange={handleInputChange} placeholder="Desc"></textarea ></Col>

                    <Button onClick={() => {
                        let tempSpecs = [...input.specs, ""]
                        setInput({ ...input, specs: tempSpecs })
                    }}>Add Specs</Button>
                    <hr></hr>
                    {
                        input?.specs?.map((item, index) =>
                            <Col xs={3}><input className="modal-input" value={item} onChange={(e) => { handleSpecInputChange(e, index) }} placeholder="Spec"></input></Col>
                        )
                    }
                </Row>
            </CustomModal>
        </div>
    )
}

export default Pickdler