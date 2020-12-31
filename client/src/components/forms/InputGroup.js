import React from "react";
import FieldGenerator from "./FieldGenerator";

const InputGroup = ({inputData, register, errors}) => {
    const inputGroupInfos = Object.values(inputData)[0];

    return (
        <div className="input-group-wrapper">
            <span className="input-group-label">{inputGroupInfos.label}</span>
            <FieldGenerator formFields={inputGroupInfos.subFields} register={register} errors={errors}/>
        </div>
    )
}

export default InputGroup;
