import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Sidebar(props) {

    const navigation = useNavigate()
    const location = useLocation()

    const redirect = (path) => {
        navigation(path)
    }

    return (
        <div className='sidebar'>
            <div className='sidebarlogo'>
                LOGO FIELD
            </div>
            <div className={location.pathname == "/" ? 'sidebardiv selected-menu' : 'sidebardiv'} onClick={() => { redirect("/") }}>
                Home
            </div>
            <div className={location.pathname == "/product" ? 'sidebardiv selected-menu' : 'sidebardiv'} onClick={() => { redirect("/product") }}>
                Product
            </div>
            <div className={location.pathname == "/table" ? 'sidebardiv selected-menu' : 'sidebardiv'} onClick={() => { redirect("/table") }}>
                Table
            </div>
            <div className={location.pathname == "/dropdown" ? 'sidebardiv selected-menu' : 'sidebardiv'} onClick={() => { redirect("/dropdown") }}>
                Dropdown
            </div>
            <div className={location.pathname == "/accordion" ? 'sidebardiv selected-menu' : 'sidebardiv'} onClick={() => { redirect("/accordion") }}>
                Accordion
            </div>
            <div className={location.pathname == "/carousel" ? 'sidebardiv selected-menu' : 'sidebardiv'} onClick={() => { redirect("/carousel") }}>
                Carousel
            </div>
        </div>
    )
}

export default Sidebar