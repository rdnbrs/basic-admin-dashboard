import React, { useEffect, useState } from "react";

function CustomCarousel(props) {

    const [sIndex, setSIndex] = useState(0)

    const handleSelect = (selectedIndex) => {
        setSIndex(selectedIndex)
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (sIndex < props.items.length - 1)
                setSIndex(sIndex + 1)
            else
                setSIndex(0)
        }, 10000)

        return () => clearInterval(intervalId)
    }, [sIndex])

    return (
        <div>
            <div className="carousel" style={{ backgroundImage: "url(" + props.item[sIndex].path + ")" }}>
            </div>
            <div className="carousel-pagination-div">
                {
                    props.items &&
                    props.items.map((item, index) => {
                        let bgColor = "white"
                        let width = "10px"
                        if (index == sIndex) {
                            bgColor = "#555555"
                            width = "25px"
                        }
                        return (
                            <div className="carousel-pagination" style={{ backgroundColor: bgColor, width: width }} onClick={() => { handleSelect(index) }}></div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CustomCarousel