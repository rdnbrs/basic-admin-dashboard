import React, { useEffect, useState } from "react"
import SearchField from "../Components/SearchField/SearchField"
import { Button, Col, Row } from "react-bootstrap"
import Datatable from "../Components/Datatable/Datatable"
import CustomModal from "../Components/CustomModal/CustomModal"

function Poll() {

    const [input, setInput] = useState({ specs: [] })
    const [loading, setLoading] = useState(false)
    const [isModalOpened, setModalOpened] = useState(false)
    const [page, setPage] = useState(0)
    const [totalRecords, setTotalRecords] = useState(10)
    const [categories, setCategories] = useState([])
    const [tableDatas, setTableDatas] = useState({
        headerInfos: [
            { title: "Id", width: "3%" },
            { title: "Poll Name", width: "11%" },
            { title: "Start Date", width: "11%" },
            { title: "End Date", width: "11%" },
            { title: "Status", width: "11%" },
            { title: "Operations", width: "8%" }
        ],
        bodyInfos: [
            {
                "Id": "1",
                "Poll Name": "BlueLock",
                "Start Date": "1",
                "End Date": "1",
                "Status": "Active",
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
                <Button style={{ marginBottom: "1rem" }} onClick={() => setModalOpened(true)}>Create Poll</Button>
                <Datatable tableDatas={tableDatas} page={page} setPage={setPage} totalRecords={totalRecords}></Datatable>
            </div>

            <CustomModal handleClose={handleClose} isModalOpened={isModalOpened} setModalOpened={setModalOpened} handleSave={handleSave}>
                <Row>
                    <Col xs={4}><input className="modal-input" value={input.text1} name="text1" onChange={handleInputChange} placeholder="Poll Name"></input></Col>
                    <Col xs={4}><input className="modal-input" value={input.text1} name="text1" onChange={handleInputChange} placeholder="Start Date"></input></Col>
                    <Col xs={4}><input className="modal-input" value={input.text1} name="text1" onChange={handleInputChange} placeholder="End Date"></input></Col>
                    <Col xs={4}><input className="modal-input" value={input.text1} name="text1" onChange={handleInputChange} placeholder="Image"></input></Col>
                    <Col xs={4}><input className="modal-input" value={input.text1} name="text1" onChange={handleInputChange} placeholder="Desc"></input></Col>
                    <Col xs={4}><input className="modal-input" value={input.text1} name="text1" onChange={handleInputChange} placeholder="Status"></input></Col>
                    <Col xs={4}><input className="modal-input" value={input.text1} name="text1" onChange={handleInputChange} placeholder="Topic"></input></Col>
                    <Col xs={4}><input className="modal-input" value={input.text1} name="text1" onChange={handleInputChange} placeholder="Items"></input></Col>
                </Row>
            </CustomModal>
        </div>
    )
}

export default Poll