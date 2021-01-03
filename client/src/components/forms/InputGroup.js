import React from "react";
import FieldGenerator from "./FieldGenerator";
import {useShouldDisplay} from "../../hooks/form/useShouldDisplay";

const InputGroup = ({inputData, register, errors, watch}) => {
    const inputGroupInfos = Object.values(inputData)[0];
    const shouldDisplay = useShouldDisplay(inputGroupInfos, watch);

    if (shouldDisplay) {
        return (
            <div className="input-group-wrapper">
                <span className="input-group-label">{inputGroupInfos.label}</span>
                <FieldGenerator formFields={inputGroupInfos.subFields} register={register} errors={errors}/>
            </div>
        )
    }

    return null;
}

export default InputGroup;
