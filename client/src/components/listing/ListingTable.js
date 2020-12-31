import React from 'react';
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const ListingTable = () => {
    return (
        <div className="table-content">
            <table className="listing-table">
                <TableHead/>
                <TableBody/>
            </table>
        </div>
    )
}

export default React.memo(ListingTable);
