import React from "react";

const InputTel = ({inputData, register, errors}) => {
    const inputName = Object.keys(inputData)[0];
    const inputInfos = Object.values(inputData)[0];
    let classNames = "input input-tel";
    if (errors[inputName]) {
        classNames += " input-error"
    }

    return (
        <div className="input-wrapper">
            <label htmlFor={inputName}>{inputInfos.label}</label>
            <input type="tel"
                   ref={register(inputInfos.register)}
                   name={inputName}
                   id={inputName}
                   className={classNames}/>
            {errors[inputName] && <span className="input-error-message">{errors[inputName].message}</span>}
        </div>
    )
}

export default InputTel;
