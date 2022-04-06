import React, { useState } from "react";
import Datatable from "../Components/Datatable/Datatable";

function Table(){

    const [page, setPage] = useState(1)
    const [totalRecords, setTotalRecords] = useState(10)
    const [tableDatas, setTableDatas] = useState(
        {
            headerInfos: [
                { title: "t1", width: "3%" },
                { title: "t2", width: "11%" },
                { title: "t3", width: "8%" },
                { title: "t4" },
                { title: "t5" },
                { title: "t6" },
                { title: "t7", width: "3%" }
            ],
            bodyInfos: [
                {
                    t1: "1",
                    t2: "2",
                    t3: "3",
                    t4: "4",
                    t5: "5",
                    t6: "6",
                    t7: {
                        isButton: true,
                        buttons: [
                            { icon: <button onClick={() => { console.log("here") }}>Operation</button> }
                        ]
                    },
                },
                {
                    t1: "1",
                    t2: "2",
                    t3: "3",
                    t4: "4",
                    t5: "5",
                    t6: "6",
                    t7: {
                        isButton: true,
                        buttons: [
                            { icon: <button onClick={() => { console.log("here") }}>Operation</button> }
                        ]
                    },
                },
                {
                    t1: "1",
                    t2: "2",
                    t3: "3",
                    t4: "4",
                    t5: "5",
                    t6: "6",
                    t7: {
                        isButton: true,
                        buttons: [
                            { icon: <button onClick={() => { console.log("here") }}>Operation</button> }
                        ]
                    },
                },
                {
                    t1: "1",
                    t2: "2",
                    t3: "3",
                    t4: "4",
                    t5: "5",
                    t6: "6",
                    t7: {
                        isButton: true,
                        buttons: [
                            { icon: <button onClick={() => { console.log("here") }}>Operation</button> }
                        ]
                    },
                },
                {
                    t1: "1",
                    t2: "2",
                    t3: "3",
                    t4: "4",
                    t5: "5",
                    t6: "6",
                    t7: {
                        isButton: true,
                        buttons: [
                            { icon: <button onClick={() => { console.log("here") }}>Operation</button> }
                        ]
                    },
                },
                {
                    t1: "1",
                    t2: "2",
                    t3: "3",
                    t4: "4",
                    t5: "5",
                    t6: "6",
                    t7: {
                        isButton: true,
                        buttons: [
                            { icon: <button onClick={() => { console.log("here") }}>Operation</button> }
                        ]
                    },
                },
                {
                    t1: "1",
                    t2: "2",
                    t3: "3",
                    t4: "4",
                    t5: "5",
                    t6: "6",
                    t7: {
                        isButton: true,
                        buttons: [
                            { icon: <button onClick={() => { console.log("here") }}>Operation</button> }
                        ]
                    },
                },
                {
                    t1: "1",
                    t2: "2",
                    t3: "3",
                    t4: "4",
                    t5: "5",
                    t6: "6",
                    t7: {
                        isButton: true,
                        buttons: [
                            { icon: <button onClick={() => { console.log("here") }}>Operation</button> }
                        ]
                    },
                }
            ]
        }
    )

    return (
        <div>
            <Datatable tableDatas={tableDatas} page={page} setPage={setPage} totalRecords={totalRecords}></Datatable>

        </div>
    )
}

export default Table