import React, { useEffect, useState } from "react";

function Multiselect(props) {

    const [displayOptions, setDisplayOptions] = useState(false)

    const selectItem = (item) => {

        if (props.selectedList.indexOf(item.item) == -1)
            props.setSelectedList([...props.selectedList, item.item])
        else {
            let newArr = [...props.selectedList]
            newArr.splice(props.selectedList.indexOf(item.item), 1)
            props.setSelectedList([...newArr])
        }
    }

    const openDropdown = () => {
        if (!displayOptions)
            setDisplayOptions(!displayOptions)
    }

    useEffect(() => {
        window.addEventListener("mousedown", pageClick, false)
    }, [props])

    const pageClick = (e) => {
        if (e.target.id != "item")
            setDisplayOptions(false)
    }

    return (
        <div className="dropdown" style={{ ...props.style }} onClick={openDropdown}>
            <label style={{ paddingLeft: "5px" }}>{props.selectedList.length}</label>
            <div className={!displayOptions ? "dropdown-content" : "dropdown-content show"}>
                {props.optionList.map(item => {
                    let isSelected = false
                    props.selectedList.forEach(sItem => {
                        if (item.key == sItem.key)
                            isSelected = true
                    })
                    return isSelected ? <div id="item" onClick={() => { selectItem({ item }) }} style={{ backgroundColor: "#8a48f4", color: "black" }}>{item.value}</div> : <div id="item" onClick={() => { selectItem({ item }) }}>{item.value}</div>
                })}
            </div>
        </div>
    )
}

export default Multiselect