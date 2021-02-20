import React from "react";
import {useShouldDisplay} from "../../hooks/form/useShouldDisplay";
const moment = require('moment');

const Input = ({inputData, register, errors, watch, groupName, defaultValues}) => {
    const inputName = groupName ? `${groupName}_${Object.keys(inputData)[0]}` : Object.keys(inputData)[0];
    const inputInfos = Object.values(inputData)[0];
    let defaultValue = null;
    const shouldDisplay = useShouldDisplay(inputInfos, watch);
    let classNames = `input input-${inputInfos.type}`;
    if (errors[inputName]) {classNames += " input-error"
    }

    if (defaultValues) {
       if (inputInfos.type === 'date') {
           defaultValue = moment(defaultValues[inputName]).format('YYYY-MM-DD');
       } else {
           defaultValue = defaultValues[inputName];
       }
    }

    if (shouldDisplay) {
        return (
            <div className="input-wrapper">
                <label htmlFor={inputName}>{inputInfos.label}</label>
                <input type={inputInfos.type}
                       ref={register(inputInfos.register)}
                       name={inputName}
                       defaultValue={defaultValue}
                       id={inputName}
                       className={classNames}/>
                {errors[inputName] && <span className="input-error-message">{errors[inputName].message}</span>}
            </div>
        )
    }

    return null;
}

export default React.memo(Input);
