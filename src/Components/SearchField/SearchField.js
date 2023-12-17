import React from "react";
import { Accordion } from "react-bootstrap";

function SearchField(props) {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Advanced Filter</Accordion.Header>
                <Accordion.Body>
                    {props.children}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default SearchField