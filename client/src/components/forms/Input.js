import React from "react";
import {useShouldDisplay} from "../../hooks/form/useShouldDisplay";

const Input = ({inputData, register, errors, watch}) => {
    const inputName = Object.keys(inputData)[0];
    const inputInfos = Object.values(inputData)[0];
    const shouldDisplay = useShouldDisplay(inputInfos, watch);

    let classNames = `input input-${inputInfos.type}`;
    if (errors[inputName]) {
        classNames += " input-error"
    }

    if (shouldDisplay) {
        return (
            <div className="input-wrapper">
                <label htmlFor={inputName}>{inputInfos.label}</label>
                <input type={inputInfos.type}
                       ref={register(inputInfos.register)}
                       name={inputName}
                       id={inputName}
                       className={classNames}/>
                {errors[inputName] && <span className="input-error-message">{errors[inputName].message}</span>}
            </div>
        )
    }

    return null;
}

export default React.memo(Input);
