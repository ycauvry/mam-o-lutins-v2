import React from 'react';
import InputGroup from "./InputGroup";
import InputSelect from "./InputSelect";
import Input from "./Input";

const FieldGenerator = ({formFields, register, errors, watch, groupName}) => {
    return (
        formFields.map((field, idx) => {
            switch (Object.values(field)[0].type) {
                case 'group':
                    return <InputGroup key={idx}
                                       inputData={field}
                                       register={register}
                                       errors={errors}
                                       watch={watch}
                                       groupName={groupName}/>
                case 'select':
                    return <InputSelect key={idx}
                                        inputData={field}
                                        register={register}
                                        errors={errors}
                                        watch={watch}
                                        groupName={groupName}/>
                default:
                    return <Input key={idx}
                                  inputData={field}
                                  register={register}
                                  errors={errors}
                                  watch={watch}
                                  groupName={groupName}/>
            }
        })
    )
}

export default FieldGenerator;
