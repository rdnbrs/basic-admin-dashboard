import React, { useState } from "react";
import Dropdown from "../Components/Dropdown/Dropdown";

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

    return (
        <div>
            <Dropdown setSelectedItem={(item) => { changeDropdownValue(item) }} optionList={optionList} selectedItem={selectedValue.key} />
        </div>
    )

}

export default DropdownPage
