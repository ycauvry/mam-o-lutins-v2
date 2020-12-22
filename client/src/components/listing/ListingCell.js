import React from 'react';
import ListingFormatter from "../../utils/formatter/ListingFormatter";

const ListingCell = ({data, defRef}) => {
    const Formatter = new ListingFormatter();

    return data[defRef] ?
        <td>{data[defRef]}</td> :
        <td>{Formatter[defRef.method](data, defRef)}</td>
}

export default ListingCell;
