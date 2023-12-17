import React, { useEffect, useState } from "react";
import Datatable from "../Components/Datatable/Datatable";

function Table() {

    const [page, setPage] = useState(1)
    const [totalRecords, setTotalRecords] = useState(10)
    const [selectedItems, setSelectedItems] = useState([])
    //const [selectedItem, setSelectedItem] = useState({})
    const [headerInfos, setHeaderInfo] = useState([
        { title: "t1 - ID", width: "11%", sortable: true, sortKey: `t1`, sort: `desc`, filterable: true, filter: ``, filterKey: `t1` },
        { title: "t2", width: "11%", sortable: false, filterable: false, filter: `` },
        { title: "t3", width: "11%", sortable: false, filterable: false, filter: `` },
        { title: "t4", sortable: false, filterable: false, filter: `` },
        { title: "t5", sortable: false, filterable: false, filter: `` },
        { title: "t6", sortable: false, filterable: false, filter: `` },
        { title: "t7", width: "3%", sortable: false, filterable: false, filter: `` }
    ])
    const [bodyInfos, setBodyInfo] = useState([
        {
            data: {
                t1: "1",
                t2: "2",
                t3: "3",
                t4: "4",
                t5: "5",
                t6: "6",
                t7: {
                    isButton: true,
                    buttons: [<button onClick={() => { console.log("here 3") }}>Operation</button>]
                }
            },
            hasChild: false,
            child: {},
        },
        {
            data: {
                t1: "2",
                t2: "2",
                t3: "3",
                t4: "4",
                t5: "5",
                t6: "6",
                t7: {
                    isButton: true,
                    buttons: [<button onClick={() => { console.log("here 3") }}>Operation</button>]
                }
            },
            hasChild: true,
            child: {
                data: <div style={{ width: `100%`, height: `70px`, display: `flex`, justifyContent: `center`, alignItems: `center` }}>
                    Child Item
                </div>,
                visable: false,
                table: false
            },
        },
        {
            data: {
                t1: "3",
                t2: "2",
                t3: "3",
                t4: "4",
                t5: "5",
                t6: "6",
                t7: {
                    isButton: true,
                    buttons: [<button onClick={() => { console.log("here 3") }}>Operation</button>]
                }
            },
            hasChild: true,
            child: {
                data: [
                    {
                        data: {
                            t1: "4",
                            t2: "2",
                            t3: "3",
                            t4: "4",
                            t5: "5",
                            t6: "6",
                            t7: "7",
                            t8: "8",
                        },
                        hasChild: true,
                        child: {
                            data: <div style={{ width: `100%`, height: `70px`, display: `flex`, justifyContent: `center`, alignItems: `center` }}>
                                Child Item
                            </div>,
                            visable: false,
                            table: false
                        }
                    },
                    {
                        data: {
                            t1: "5",
                            t2: "2",
                            t3: "3",
                            t4: "4",
                            t5: "5",
                            t6: "6",
                            t7: "7",
                            t8: "8",
                        },
                        hasChild: true,
                        child: {
                            data: [
                                {
                                    data: {
                                        t1: "6",
                                        t2: "2",
                                        t3: "3",
                                        t4: "4",
                                    }
                                }
                            ],
                            visable: false,
                            table: true
                        }

                    },
                    {
                        data: {
                            t1: "7",
                            t2: "2",
                            t3: "3",
                            t4: "4",
                            t5: "5",
                            t6: "6",
                            t7: "7",
                            t8: "8",
                        }
                    },
                    {
                        data: {
                            t1: "8",
                            t2: "2",
                            t3: "3",
                            t4: "4",
                            t5: "5",
                            t6: "6",
                            t7: "7",
                            t8: "8",
                        }
                    }
                ],
                visable: false,
                table: true
            },
        },
        {
            data: {
                t1: "9",
                t2: "2",
                t3: "3",
                t4: "4",
                t5: "5",
                t6: "6",
                t7: {
                    isButton: true,
                    buttons: [<button onClick={() => { console.log("here 3") }}>Operation</button>]
                }
            },
            hasChild: false,
            child: {},
        },
    ])

    useEffect(() => {
        console.log(headerInfos)
    }, [headerInfos])

    useEffect(() => {
        console.log(selectedItems)
    }, [selectedItems])

    useEffect(() => {
        console.log(bodyInfos)
    }, [bodyInfos])

    return (
        <div>
            <Datatable headerInfos={headerInfos} setHeaderInfo={setHeaderInfo} bodyInfos={bodyInfos} setBodyInfo={setBodyInfo} page={page} setPage={setPage} totalRecords={totalRecords}
                selection={`multiple`} selectedItems={selectedItems} setSelectedItems={setSelectedItems}>
            </Datatable>
        </div>
    )
}

export default Table