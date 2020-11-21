import React, {useContext} from "react";
import {ListingDef} from "../../utils/ListingDefinitions";
import {ListingContext} from "../../context/ListingContext";
import ApiFormatter from "../../utils/ApiFormatter";

const TableBody = () => {
    const {listingData, listingType} = useContext(ListingContext);
    const Formatter = new ApiFormatter();
    return (
        <tbody>
        {listingData.map((tableRow, rowIdx) => {
            return (
                <tr key={`t-row-${rowIdx}`}>
                    {Object.keys(ListingDef[listingType].table_body).map((tableCell, cellIdx) => {
                        const definitionRef = ListingDef[listingType].table_body[tableCell];
                        if (tableRow.hasOwnProperty(tableCell)) {
                            if (typeof tableRow[tableCell] === 'string') {
                                return <td key={`t-cell-${cellIdx}`}>{tableRow[tableCell]}</td>
                            } else {
                                return <td key={`t-cell-${cellIdx}`}>
                                    {Formatter[Object.keys(definitionRef)[0]](
                                        tableRow[tableCell],
                                        Object.values(definitionRef)[0]
                                    )}
                                </td>
                            }
                        } else {
                            console.log(tableRow);
                            return <td key={`t-cell-${cellIdx}`}></td>
                        }
                    })}
                </tr>
            )
        })}
        </tbody>
    )
}

export default TableBody;