import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";

function Datatable(props) {

    const [displayedPages, setDisplayedPages] = useState([])

    useEffect(() => {
        let dArr = []
        for (let i = props.page - 2; i < props.page + 3; i++) {
            if (i > 1 && i < props?.totalRecords)
                dArr = [...dArr, i]
        }
        setDisplayedPages([...dArr])
    }, [props])

    const onHandleHeaderSort = (index) => {
        let tempHeader = [...props.headerInfos]
        if (tempHeader[index]?.sortable) {
            if (tempHeader[index].sort === `desc`)
                tempHeader[index].sort = `asc`
            else
                tempHeader[index].sort = `desc`

            props.setHeaderInfo([...tempHeader])
        }
    }

    let temp = [...props.selectedItems]
    const handleMultipleSelection = (item, operation) => {
        if (props.selectedItems.indexOf(item.data.t1) != -1) {
            if (operation === `remove` || operation === undefined) {
                temp.splice(temp.indexOf(item.data.t1), 1)
                if (item.hasChild && Array.isArray(item.child.data))
                    item.child.data.forEach(element => {
                        handleMultipleSelection(element, `remove`)
                    });
            }
        } else {
            if (operation === `insert` || operation === undefined) {
                temp = [...temp, item.data.t1]
                if (item.hasChild && Array.isArray(item.child.data))
                    item.child.data.forEach(element => {
                        handleMultipleSelection(element, `insert`)
                    });
            }
        }

        props.setSelectedItems([...temp])
    }

    const handleSingleSelection = (item) => {

    }

    const onRowClicked = (item) => {
        if (item.hasChild) {
            let tempBodyInfo = [...props.bodyInfos]
            tempBodyInfo.forEach(bItem => {
                if (bItem.data.t1 == item.data.t1)
                    bItem.child.visable = !bItem.child.visable
            })
            try {
                props.setBodyInfo([...tempBodyInfo])
            }
            catch (e) {
                props.rerenderTable()
            }
        }
    }

    const rerenderTable = () => {
        try {
            debugger
            props.setBodyInfo([...props.bodyInfos])
        }
        catch (e) {
            props.rerenderTable()
        }
    }

    return (
        <>
            <div className="table-scroll">
                <table className="custom-table">
                    {
                        props?.headerInfos &&
                        <thead>
                            <tr className="tbl-txt">
                                {
                                    props?.selection &&
                                    <th></th>
                                }
                                {
                                    props?.headerInfos.map((item, index) => {
                                        if (item.width)
                                            return <th style={{ width: item.width }} onClick={() => onHandleHeaderSort(index)} >{item.title} <br />{item.filterable && <input style={{ width: `100%` }}></input>}</th>
                                        else
                                            return <th onClick={() => onHandleHeaderSort(index)}>{item.title} <br />{item.filterable && <input style={{ width: `100%` }}></input>}</th>
                                    })
                                }
                            </tr>
                        </thead>
                    }
                    {
                        props?.bodyInfos &&
                        <tbody>
                            {
                                props?.bodyInfos.map(item => {
                                    return (
                                        <>
                                            <tr key="" onClick={() => onRowClicked(item)}>
                                                {
                                                    props?.selection &&
                                                    <>
                                                        {
                                                            props?.selection === `multiple` &&
                                                            <input type="checkbox" id="chckbx" name="chckbx" value={item} checked={props?.selectedItems?.indexOf(item.data.t1) != -1} onClick={() => handleMultipleSelection(item)} />
                                                        }
                                                        {
                                                            props?.selection !== `multiple` &&
                                                            <input type="checkbox" id="chckbx" name="chckbx" value={item} checked={props?.selectedItems == item} onClick={() => handleSingleSelection(item)} />
                                                        }
                                                    </>
                                                }
                                                {
                                                    Object.keys(item.data).map(sItem => {
                                                        if (!item.data[sItem]?.isButton)
                                                            return <td className="tbl-txt">{item.data[sItem]}</td>
                                                        else
                                                            return (
                                                                <td className="tbl-txt" align="center">
                                                                    {item[sItem]?.buttons.map(bItem => {
                                                                        return <>{bItem.icon}</>
                                                                    })}
                                                                </td>
                                                            )
                                                    })
                                                }
                                            </tr>
                                            {
                                                (item?.hasChild && item?.child?.visable && !item?.child?.table) &&
                                                <tr>
                                                    {
                                                        props?.selection &&
                                                        <td></td>
                                                    }
                                                    <td colSpan={Object.keys(item.data).length}>
                                                        {item?.child?.data}
                                                    </td>
                                                </tr>
                                            }
                                            {
                                                (item?.hasChild && item?.child?.visable && item?.child?.table) &&
                                                <tr>
                                                    {
                                                        props?.selection &&
                                                        <td></td>
                                                    }
                                                    <td colSpan={Object.keys(item.data).length}>
                                                        <Datatable bodyInfos={item?.child?.data} totalRecords={0} selection={props.selection} selectedItems={props.selectedItems} setSelectedItems={props.setSelectedItems} rerenderTable={rerenderTable}>
                                                        </Datatable>
                                                    </td>

                                                </tr>
                                            }
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    }
                </table>
            </div>
            {
                props?.totalRecords > 1 &&
                <div style={{ display: "flex", justifyContent: "center", marginTop: "5px" }}>
                    <Pagination size="sm">
                        {
                            (props?.page && props.page > 1) &&
                            <>
                                <Pagination.First onClick={() => { props.setPage(1) }} />
                                <Pagination.Prev onClick={() => { props.setPage(props.page - 1) }} />
                                <Pagination.Item onClick={() => { props.setPage(1) }}>{1}</Pagination.Item>
                            </>
                        }
                        {
                            (props?.page && props.page == 1) &&
                            <>
                                <Pagination.Item active>{1}</Pagination.Item>
                                {
                                    displayedPages.map(item => {
                                        if (props.page == item)
                                            return <Pagination.Item active>{item}</Pagination.Item>
                                        else
                                            return <Pagination.Item onClick={() => { props.setPage(item) }}>{item}</Pagination.Item>
                                    })
                                }
                                {props?.totalRecords && props?.totalRecords > 3 &&
                                    <Pagination.Ellipsis />
                                }
                            </>
                        }
                        {
                            props?.page && props?.page != 1 &&
                            <>
                                {
                                    displayedPages[0] > 2 && props?.totalRecords && props?.totalRecords > 3 &&
                                    <Pagination.Ellipsis />
                                }
                                {
                                    displayedPages.map(item => {
                                        if (props.page == item)
                                            return <Pagination.Item active>{item}</Pagination.Item>
                                        else
                                            return <Pagination.Item onClick={() => { props.setPage(item) }}>{item}</Pagination.Item>
                                    })
                                }
                                {
                                    displayedPages[displayedPages.length - 1] < props?.totalRecords - 1 &&
                                    <Pagination.Ellipsis />
                                }
                            </>
                        }
                        {
                            props?.page && props?.totalRecords && props.page < props.totalRecords &&
                            <>
                                <Pagination.Item onClick={() => { props.setPage(props.totalRecords) }}>{props.totalRecords}</Pagination.Item>
                                <Pagination.Next onClick={() => { props.setPage(props.page + 1) }} />
                                <Pagination.Last onClick={() => { props.setPage(props.totalRecords) }} />
                            </>
                        }
                        {
                            props?.page && props.page == props.totalRecords &&
                            <Pagination.Item active>{props.totalRecords}</Pagination.Item>
                        }
                    </Pagination>
                </div>
            }
        </>
    )
}

export default Datatable