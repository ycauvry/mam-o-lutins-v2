import {useEffect, useState} from "react";
import {getObjectById} from "../../utils/Api";

export const useFormDefaultValues = (formType, type, formFields, id) => {
    const [object, setObject] = useState({});
    let defaultValues = null;
    const objectKeys = formFields.map(field => Object.keys(field)).flat();

    useEffect (() => {
        if (formType === 'editData') {
            getObjectById(type, id).then(data => setObject(data));
        }
    }, [formFields, type, id, formType]);

    if (object && Object.keys(object).length) {
        for (const key of objectKeys) {
            if (typeof object[key] === 'object') {
                for (const subKey in object[key]) {
                    defaultValues = {
                        ...defaultValues,
                        ...{[`${key}_${subKey}`]: object[key][subKey]}
                    }
                }
            }
            defaultValues = {
                ...defaultValues,
                ...{[key]: object[key]}
            }
        }
    }

    return defaultValues
}
