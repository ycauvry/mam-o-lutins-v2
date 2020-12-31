import React, {useState} from "react";
import {FormDef} from "../../utils/FormDefinitions";
import '../../styles/forms/Form.css';
import {useForm} from "react-hook-form";
import {postObject} from "../../utils/Api";
import InputSubmit from "./InputSubmit";
import FormSpinner from "./FormSpinner";
import FieldGenerator from "./FieldGenerator";

const GeneralForm = ({type}) => {
    console.log(type)
    const {register, handleSubmit, errors, reset} = useForm();
    const [process, setProcess] = useState(false);
    const formFields = FormDef[type].fields;

    const onSubmit = async data => {
        setProcess(true);
        await postObject(type, data);
        reset();
        setProcess(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} id="form-general">
            <FieldGenerator formFields={formFields} register={register} errors={errors}/>
            <InputSubmit process={process}/>
            <FormSpinner process={process}/>
        </form>
    )
}

export default GeneralForm;
