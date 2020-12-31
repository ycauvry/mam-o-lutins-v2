import React from "react";
import {FormDef} from "../../utils/FormDefinitions";
import GeneralForm from "../forms/GeneralForm";

const AddData = ({type}) => {
    return (
        <>
            <h1 className="title add-title">{'Ajouter ' + FormDef[type].formTitle}</h1>
            <GeneralForm type={type}/>
        </>
    )
}

export default AddData;
