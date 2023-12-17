import React from "react"
import Home from "./Pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Products from "./Pages/Products"
import Sidebar from "./Components/Sidebar/Sidebar"
import Navbar from "./Components/Navbar/Navbar"
import Table from "./Pages/Table"
import DropdownPage from "./Pages/DropdownPage"
import AccordionPage from "./Pages/AccordionPage"
import ModalPage from "./Pages/ModalPage"
import Category from "./Pages/Category"
import Topic from "./Pages/Topic"
import PItem from "./Pages/PItem"
import Poll from "./Pages/Poll"

export function App() {
    return (
        <div className="allPage">
            <div>
                <Router>
                    <Sidebar></Sidebar>

                    <div className="content">
                        <Navbar></Navbar>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/product" element={<Products />} />
                            <Route path="/table" element={<Table />} />
                            <Route path="/dropdown" element={<DropdownPage />} />
                            <Route path="/accordion" element={<AccordionPage />} />
                            <Route path="/modal" element={<ModalPage />} />
                            <Route path="/category" element={<Category />} />
                            <Route path="/topic" element={<Topic />} />
                            <Route path="/item" element={<PItem />} />
                            <Route path="/pickroll" element={<Poll />} />
                        </Routes>
                    </div>
                </Router>
            </div>
        </div>
    )
}