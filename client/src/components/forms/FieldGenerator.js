import React from 'react';
import InputGroup from "./InputGroup";
import InputText from "./InputText";
import InputDate from "./InputDate";
import InputTel from "./InputTel";

const FieldGenerator = ({formFields, register, errors}) => {
    return (
        formFields.map((field, idx) => {
            switch (Object.values(field)[0].type) {
                case 'group':
                    return <InputGroup key={idx} inputData={field} register={register} errors={errors}/>
                case 'text':
                    return <InputText key={idx} inputData={field} register={register} errors={errors}/>
                case 'date':
                    return <InputDate key={idx} inputData={field} register={register} errors={errors}/>
                case 'tel':
                    return <InputTel key={idx} inputData={field} register={register} errors={errors}/>
                default:
                    return null
            }
        })
    )
}

export default FieldGenerator;
