import React, { useEffect, useState } from "react";

function Dropdown(props) {

    const [displayOptions, setDisplayOptions] = useState(false)
    const [display, setDisplay] = useState("")

    const changeDisplayDropdown = () => {
        setDisplayOptions(!displayOptions)
    }

    const selectItem = (item) => {
        changeDisplayDropdown()
        props.setSelectedItem(item)
    }

    useEffect(() => {
        console.log(props)
        let displayChanged = false
        props.optionList.forEach(item => {
            if (item.key === props.selectedItem) {
                setDisplay(item.value)
                displayChanged = true
            }
        })

        if (!displayChanged)
            setDisplay("")

        window.addEventListener("mousedown", pageClick, false)
    }, [props])

    const pageClick = (e) => {
        if (e.target.id != "item")
            setDisplayOptions(false)
    }

    return (
        <div className="dropdown" style={{ ...props.style }} onClick={changeDisplayDropdown}>
            <label style={{paddingLeft:"5px"}}>{display}</label>
            <div className={!displayOptions ? "dropdown-content" : "dropdown-content show"}>
                {props.optionList.map(item => {
                    return <div id="item" key="" onClick={() => { selectItem({ item }) }}>{item.value}</div>
                })}
            </div>
        </div>
    )
}

export default Dropdown