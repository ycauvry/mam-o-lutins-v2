import React, {useContext} from "react";
import {ListingContext} from "../../context/ListingContext";
import {ListingDef} from "../../utils/ListingDefinitions";
import ListingCell from "./ListingCell";
import ListingCellAction from "./ListingCellAction";

const TableBody = () => {
    const {listingData, listingType, loading} = useContext(ListingContext);
    const tbodyDef = Object.values(ListingDef[listingType].tableBody);

    if (!loading) {
        return (
            <tbody>
            {
                listingData.map(row =>
                    <tr key={row._id}>
                        {
                            tbodyDef.map((cell, idx) =>
                                <ListingCell key={cell + idx} data={row} defRef={cell}/>
                            )
                        }
                        <ListingCellAction id={row._id}/>
                    </tr>
                )
            }
            </tbody>
        )
    }
}

export default TableBody;