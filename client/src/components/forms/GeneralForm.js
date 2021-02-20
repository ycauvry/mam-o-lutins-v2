import React, {useState} from "react";
import {FormDef} from "../../utils/FormDefinitions";
import '../../styles/forms/Form.css';
import {useForm} from "react-hook-form";
import {postObject} from "../../utils/Api";
import InputSubmit from "./InputSubmit";
import FormSpinner from "./FormSpinner";
import FieldGenerator from "./FieldGenerator";
import {useFormDefaultValues} from "../../hooks/form/useFormDefaultValues";
import {useParams} from "react-router-dom";

const GeneralForm = ({type, formType}) => {
    const formFields = FormDef[type].fields;
    const defaultValues = useFormDefaultValues(formType, type, formFields, useParams().id);
    const {register, handleSubmit, errors, reset, watch} = useForm();
    const [process, setProcess] = useState(false);
    const onSubmit = async data => {
        setProcess(true);
        await postObject(type, data);
        reset();
        setProcess(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} id="form-general">
            <FieldGenerator formFields={formFields}
                            register={register}
                            errors={errors}
                            reset={reset}
                            defaultValues={defaultValues}
                            watch={watch}/>
            <InputSubmit process={process}/>
            <FormSpinner process={process}/>
        </form>
    )
}

export default React.memo(GeneralForm);
