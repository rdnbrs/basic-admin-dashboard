import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";

function Datatable(props) {

    const [displayedPages, setDisplayedPages] = useState([])

    useEffect(() => {
        console.log(props)
    }, [])

    useEffect(() => {
        let dArr = []
        for (let i = props.page - 2; i < props.page + 3; i++) {
            if (i > 1 && i < props?.totalRecords)
                dArr = [...dArr, i]
        }
        setDisplayedPages([...dArr])
    }, [props])

    return (
        <>
            <div className="table-scroll">
                <table className="custom-table">
                    {props?.tableDatas?.headerInfos &&
                        <thead>
                            <tr className="tbl-txt">
                                {
                                    props?.tableDatas?.headerInfos.map(item => {
                                        if (item.width)
                                            return <th style={{ width: item.width }}>{item.title}</th>
                                        else
                                            return <th>{item.title}</th>
                                    })
                                }
                            </tr>
                        </thead>
                    }
                    {
                        props?.tableDatas?.bodyInfos &&
                        <tbody>
                            {
                                props?.tableDatas?.bodyInfos.map(item => {
                                    return (
                                        <tr>
                                            {
                                                Object.keys(item).map(sItem => {
                                                    if (!item[sItem]?.isButton)
                                                        return <td className="tbl-txt">{item[sItem]}</td>
                                                    else
                                                        return (
                                                            <td className="tbl-txt">
                                                                {item[sItem]?.buttons.map(bItem => {
                                                                    return <>{bItem.icon}</>
                                                                })}
                                                            </td>
                                                        )
                                                })
                                            }
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    }
                </table>
            </div>
            {
                props?.totalRecords > 1 &&
                <div style={{ display: "flex", justifyContent: "center", marginTop:"5px" }}>
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