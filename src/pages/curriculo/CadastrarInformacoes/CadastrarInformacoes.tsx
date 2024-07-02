import React from 'react';

import { Formik, Form, } from 'formik';
import * as Yup from 'yup';

import styles from './CadastrarInformacoes.module.css';
import Input from '../../../components/forms/Input/Input';
import Textarea from '../../../components/forms/textarea';

interface FormValues {
    foto: string;
    nome: string;
    cargo: string;
    resumo: string;
}

const CadastrarInformacoes: React.FC = () => {

    const initialValues: FormValues = {
        foto: '',
        nome: '',
        cargo: '',
        resumo: '',
    };

    const validationSchema = Yup.object().shape({
        foto: Yup.string().required('Campo Obrigatório'),
        nome: Yup.string().required('Campo Obrigatório'),
        cargo: Yup.string().required('Campo Obrigatório'),
        resumo: Yup.string().required('Campo Obrigatório'),
    });

    const onsubmit = (values: FormValues, { resetForm }: { resetForm: () => void }) => {
        // Lógica de envio para o backend
        console.log(values);
        resetForm();
        alert('Formulaário enviado com sucesso!');
    };


    return (
        <div className={styles.formWrapper}>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onsubmit}>
                {({ errors, touched }) => (

                    <Form className={styles.form}>

                        <h2 className={styles.title}>Cadastrar informações</h2>

                        <Input
                            label="Foto"
                            name="Foto"
                            errors={errors.foto}
                            touched={touched.foto}
                        />

                        <Input
                            label="Nome"
                            name="nome"
                            errors={errors.nome}
                            touched={touched.nome}
                        />

                        <Input
                            label="Cargo"
                            name="cargo"
                            errors={errors.cargo}
                            touched={touched.cargo}
                        />

                        <Textarea
                            label="Resumo"
                            name='resumo'
                            errors={errors.resumo}
                            touched={touched.resumo}
                        />

                        <button type="submit" className={styles.button}>Salvar</button>

                    </Form>
                )}
            </Formik>
        </div >
    );
};


export default CadastrarInformacoes;


