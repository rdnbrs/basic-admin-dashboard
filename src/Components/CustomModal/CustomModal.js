import React from "react";
import { Button, Modal } from "react-bootstrap";


function CustomModal(props) {
    return (
        <Modal show={props.isModalOpened} onHide={props.handleClose} backdrop="static" className="custom-modal" size="xl">
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CustomModal