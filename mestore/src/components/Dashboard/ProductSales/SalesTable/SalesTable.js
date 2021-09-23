import React, { useContext, useEffect, useState } from "react";
import UiContext from "./../../../../store/ui-context";

import classes from "./SalesTable.module.scss";
import Axios from "axios";

/*const productSalesData = [
    {
        id: 1,
        productName: "Nike Air Jordan",
        sales: "330",
        stock: "645",
        amount: "415.01",
        status: true,
    },
    {
        id: 2,
        productName: "Adidas Football",
        sales: "568",
        stock: "321",
        amount: "326.51",
        status: true,
    },
    {
        id: 3,
        productName: "Puma Football",
        sales: "124",
        stock: "880",
        amount: "180.50",
        status: true,
    },
    {
        id: 4,
        productName: "Adidas Black Hat",
        sales: "710",
        stock: "0",
        amount: "60.25",
        status: false,
    },
    {
        id: 5,
        productName: "Nike White Jacket",
        sales: "654",
        stock: "0",
        amount: "86.43",
        status: false,
    },
    {
        id: 6,
        productName: "Northface Sweater",
        sales: "256",
        stock: "0",
        amount: "106.54",
        status: false,
    },
    {
        id: 7,
        productName: "Northface Sweater",
        sales: "256",
        stock: "0",
        amount: "106.54",
        status: false,
    },
    {
        id: 8,
        productName: "Northface Sweater",
        sales: "256",
        stock: "0",
        amount: "106.54",
        status: false,
    },
];*/

const SalesTable = () => {
    const uiCtx = useContext(UiContext);
    const themeClass = uiCtx.theme === "light" ? classes.light__mode : classes.dark__mode;
    const [infoList, setInfoList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((response) => {
            setInfoList(response.data);
        });
    }, []);

    return (
        <table className={`${classes.table} ${themeClass}`}>
            <thead>
                <tr className={`${classes.table__head} ${themeClass}`}>
                    <th>Year</th>
                    <th>Institutional sector </th>
                    <th>Instititional code </th>
                    <th>Descriptor</th>
                    <th>SNA08TRANS</th>
                    <th>Asset code</th>
                    <th>Status</th>
                    <th>Values</th>
                </tr>
            </thead>
            <tbody>
                {infoList.slice(0, 100).map(({ Year, Institutional_sector_name, Institutional_sector_code, Descriptor, SNA08TRANS, Asset_liability_code, Status  }) => (
                    <tr >
                        <td>
                            {Year}
                        </td>
                        <td>{Institutional_sector_name}</td>
                        <td>{Institutional_sector_code}</td>
                        <td>{Descriptor}</td>
                        <td>{SNA08TRANS}</td>
                        <td>{Asset_liability_code}</td>
                        <td>{Status}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SalesTable;
