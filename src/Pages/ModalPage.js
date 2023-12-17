import React, { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import CustomModal from "../Components/CustomModal/CustomModal"

function ModalPage() {

    const [isModalOpened, setModalOpened] = useState(false)
    const [input, setInput] = useState({
        text1: "",
        text2: ""
    })

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

    const handleSave = () => {
        console.log(input)
        handleClose()
    }

    return (
        <div>
            <div>
                <Button onClick={() => { setModalOpened(true) }}>Open Modal</Button>
            </div>

            <CustomModal handleClose={handleClose} isModalOpened={isModalOpened} setModalOpened={setModalOpened} handleSave={handleSave}>
                <div>
                    <div><input value={input.text1} name="text1" onChange={handleInputChange}></input></div>
                    <div><input value={input.text2} name="text2" onChange={handleInputChange}></input></div>
                </div>
            </CustomModal>
        </div>
    )
}

export default ModalPage