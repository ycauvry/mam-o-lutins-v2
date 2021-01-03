import React from "react";
import {useFormSelect} from "../../hooks/form/useFormSelect";
import {useShouldDisplay} from "../../hooks/form/useShouldDisplay";

const InputSelect = ({inputData, register, errors, watch}) => {
    const inputName = Object.keys(inputData)[0];
    const inputInfos = Object.values(inputData)[0];
    const selectOptions = useFormSelect(inputInfos.namespace, inputInfos.optionList, inputInfos.choices);
    const shouldDisplay = useShouldDisplay(inputInfos, watch);
    let classNames = "input input-select";
    if (errors[inputName]) {
        classNames += " input-error"
    }

    if (shouldDisplay) {
        return (
            <div className="input-wrapper">
                <label htmlFor={inputName}>{inputInfos.label}</label>
                <select ref={register(inputInfos.register)}
                        name={inputName}
                        id={inputName}
                        className={classNames}>
                    {selectOptions};
                </select>
                {errors[inputName] && <span className="input-error-message">{errors[inputName].message}</span>}
            </div>
        )
    }

    return null;
}

export default InputSelect;
