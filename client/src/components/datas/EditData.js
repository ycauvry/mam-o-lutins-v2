import React from "react";
import GeneralForm from "../forms/GeneralForm";

const EditData =  ({type}) => {
    return (
        <>
        <h1 className="title edit-title">Edit</h1>
        <GeneralForm type={type} formType={'editData'}/>
        </>
    )
}

export default EditData;
