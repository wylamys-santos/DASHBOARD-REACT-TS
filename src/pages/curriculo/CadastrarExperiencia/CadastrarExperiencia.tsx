import React from "react";

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import styles from './CadastrarExperiencia.module.css';
import Input from "../../../components/forms/Input/Input";
import Textarea from "../../../components/forms/textarea/Textarea";

interface FormValues {
    titulo: string;
    descricao: string;
    tipo: string;
    dataInicio: string;
    anoFim: string;
}

const CadastrarExperiencia: React.FC = () => {

    const initialValues: FormValues = {
        titulo: '',
        descricao: '',
        tipo: '',
        dataInicio: '',
        anoFim: '',

    };

    const validationSchema = Yup.object().shape({
        titulo: Yup.string().required('Campo Obrigatório'),
        descricao: Yup.string().required('Campo Obrigatório'),
        tipo: Yup.string().required('Campo Obrigatório'),
        anoInicio: Yup.string().required('Campo Obrigatório').typeError('A number is required'),
        anoFim: Yup.string().required('Campo Obrigatório'),
    });

    const onSubmit = (values: FormValues, { resetForm }: { resetForm: () => void }) => {
        // Lógica de envio para o backend
        console.log(values);
        resetForm();
        alert('Formulaário enviado com sucesso!');
    };

    return (
        <div className={styles.formWrapper}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}

            >
                {({ errors, touched }) => (
                    <Form className={styles.form}>
                        <h2 className={styles.tetle}>Cadastrar Experiência</h2>

                        <Input
                            label="Título"
                            name="titulo"
                            errors={errors.titulo}
                            touched={touched.titulo}
                        />


                        <Input
                            label="Tipo"
                            name="tipo"
                            errors={errors.tipo}
                            touched={touched.tipo}
                        />


                        <Input
                            label="Ano Início"
                            name="anoInicio"
                            

                        />



                        <Input
                            label="Ano Fim"
                            name="anoFim"
                            errors={errors.anoFim}
                            touched={touched.anoFim}

                        />

                        <Textarea
                            label="Descrição"
                            name="descricao"
                            errors={errors.descricao}
                            touched={touched.descricao}
                        />

                        <button type="submit" className={styles.button}>Cadastrar</button>

                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CadastrarExperiencia;