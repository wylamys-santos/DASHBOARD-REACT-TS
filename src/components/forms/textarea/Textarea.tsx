import React from "react";
import { Field, ErrorMessage } from 'formik';
import style from './Textarea.module.css';

interface TextareaProps {
    label?: string;
    name: string;
    errors?: string;
    touched?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, errors, touched }) => {
    return (
        <div className={style.formGroup}>
            {label && (
                <label htmlFor={name} className={style.label}>
                    {label}
                </label>
            )}

            <Field
                as="textarea"
                id={name}
                name={name}
                className={`${style.textarea} ${touched && errors && style.error}`} />
            <ErrorMessage name={name} component="div" className={style.errorMsg} />
        </div>
    );
};

export default Textarea;
