import React, {useEffect, useState} from "react";
import {listObjects} from "../../utils/Api";

export const useFormSelect = (namespace, optionList, choices) => {
    const [optionsData, setOptionsData] = useState([])

    useEffect(() => {
        if (optionList === 'api') {
            listObjects(namespace).then(data => setOptionsData(data));
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [namespace])

    if (optionList === 'api') {
        return optionsData.map(data =>
            <option key={data._id} value={data._id}>
                {choices.map(field => data[field]).join(' ')}
            </option>
        )
    }

    return choices.map(choice =>
        <option key={choice.name} value={choice.name}>{choice.label}</option>
    )
}
