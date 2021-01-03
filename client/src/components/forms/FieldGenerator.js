import React from 'react';
import InputGroup from "./InputGroup";
import InputSelect from "./InputSelect";
import Input from "./Input";

const FieldGenerator = ({formFields, register, errors, watch}) => {
    return (
        formFields.map((field, idx) => {
            switch (Object.values(field)[0].type) {
                case 'group':
                    return <InputGroup key={idx} inputData={field} register={register} errors={errors} watch={watch}/>
                case 'select':
                    return <InputSelect key={idx} inputData={field} register={register} errors={errors} watch={watch}/>
                default:
                    return <Input key={idx} inputData={field} register={register} errors={errors} watch={watch}/>
            }
        })
    )
}

export default FieldGenerator;
