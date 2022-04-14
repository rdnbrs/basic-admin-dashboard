import React, { useState } from "react";
import Dropdown from "../Components/Dropdown/Dropdown";
import Multiselect from "../Components/Dropdown/Multiselect";

function DropdownPage() {

    const [selectedValue, setSelectedValue] = useState({})
    const [optionList, setOptionList] = useState(
        [
            { key: "A1", value: "a1-label" },
            { key: "A2", value: "a2-label" },
            { key: "A3", value: "a3-label" },
            { key: "A4", value: "a4-label" },
            { key: "A5", value: "a5-label" },
        ]
    )

    const changeDropdownValue = (item) => {
        setSelectedValue(item.item)
    }

    const [selectedList, setSelectedList] = useState([])

    return (
        <div>
            <Dropdown setSelectedItem={(item) => { changeDropdownValue(item) }} optionList={optionList} selectedItem={selectedValue.key} />
            <Multiselect setSelectedItem={(item) => { changeDropdownValue(item) }} optionList={optionList} selectedItem={selectedValue.key} selectedList={selectedList} setSelectedList={setSelectedList} />
        </div>
    )

}

export default DropdownPage
