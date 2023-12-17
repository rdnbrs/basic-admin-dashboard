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
                <div className="menu-icon">H</div>  <div className="menu-text">Home</div>
            </div>
            <div className={location.pathname == "/product" ? 'sidebardiv selected-menu' : 'sidebardiv'} onClick={() => { redirect("/product") }}>
                <div className="menu-icon">P</div> <div className="menu-text">Product</div>
            </div>
            <div className={location.pathname == "/table" ? 'sidebardiv selected-menu' : 'sidebardiv'} onClick={() => { redirect("/table") }}>
                <div className="menu-icon">T</div> <div className="menu-text">Table</div>
            </div>
            <div className={location.pathname == "/dropdown" ? 'sidebardiv selected-menu' : 'sidebardiv'} onClick={() => { redirect("/dropdown") }}>
                <div className="menu-icon">D</div> <div className="menu-text">Dropdown</div>
            </div>
            <div className={location.pathname == "/accordion" ? 'sidebardiv selected-menu' : 'sidebardiv'} onClick={() => { redirect("/accordion") }}>
                <div className="menu-icon">A</div> <div className="menu-text">Accordion</div>
            </div>
            <div className={location.pathname == "/carousel" ? 'sidebardiv selected-menu' : 'sidebardiv'} onClick={() => { redirect("/carousel") }}>
                <div className="menu-icon">C</div> <div className="menu-text">Carousel</div>
            </div>
            <div className={location.pathname == "/modal" ? 'sidebardiv selected-menu' : 'sidebardiv'} onClick={() => { redirect("/modal") }}>
                <div className="menu-icon">M</div> <div className="menu-text">Modal</div>
            </div>
            <div className={location.pathname == "/category" ? 'sidebardiv selected-menu' : 'sidebardiv'} onClick={() => { redirect("/category") }}>
                <div className="menu-icon">CA</div> <div className="menu-text">Category</div>
            </div>
            <div className={location.pathname == "/topic" ? 'sidebardiv selected-menu' : 'sidebardiv'} onClick={() => { redirect("/topic") }}>
                <div className="menu-icon">TO</div> <div className="menu-text">Topic</div>
            </div>
            <div className={location.pathname == "/item" ? 'sidebardiv selected-menu' : 'sidebardiv'} onClick={() => { redirect("/item") }}>
                <div className="menu-icon">IT</div> <div className="menu-text">Item</div>
            </div>
            <div className={location.pathname == "/pickroll" ? 'sidebardiv selected-menu' : 'sidebardiv'} onClick={() => { redirect("/pickroll") }}>
                <div className="menu-icon">PR</div> <div className="menu-text">Pickroll</div>
            </div>
        </div>
    )
}

export default Sidebar