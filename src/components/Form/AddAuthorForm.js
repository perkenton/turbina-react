import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextInput from "./TextInput";
import TextArea from "./TextArea";
import Checkbox from "./Checkbox";
import SubmitButton from "./SubmitButton";

import api from './../../utils/api';

const AddAuthorForm = () => {
  const [incorrectRequest, setIncorrectRequest] = React.useState(false);

  return (
    <>
      <Formik
        initialValues={{
          author: "",
          phone: "",
          email: "",
          lyrics: "",
          acceptedTerms: false
        }}

        validationSchema={Yup.object({
          author: Yup.string()
            .min(2, "Длина имени должна быть больше либо равна 2")
            .required("Обязательное поле"),
          phone: Yup.string()
            .matches(/^(8|\+7)(\(\d{3}\)[\s]?(\d{3})-(\d{2})-(\d{2}))|(8|\+7)([\s](\d{3})-(\d{3})-(\d{2})-(\d{2}))|(8|\+7)(\d{10})$/, 
              { message: "Некорректный формат номера телефона", excludeEmptyString: true })
            .required("Обязательное поле"),
          email: Yup.string()
            .email("Некорректный формат эл.почты")
            .required("Обязательное поле"),
          lyrics: Yup.string()
            .required("Обязательное поле"),
          acceptedTerms: Yup.boolean()
            .required("Обязательное поле")
        })}

        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const hasError = await api.addAuthor(values); 

          setIncorrectRequest(hasError);                      
          setSubmitting(false);  
          
          if (!hasError) {resetForm();}
        }}

      >
        {({ isSubmitting, errors, values }) => (
          <Form className="form">
            <TextInput
              type="text"
              name="author"
              className="form__input"
              placeholder="Имя и фамилия автора"
            />
            <TextInput
              type="tel" 
              name="phone" 
              className="form__input" 
              placeholder="Телефон"
            />
            <TextInput
              type="email"
              name="email"
              className="form__input"
              placeholder="Почта"
            />
            <TextArea
              name="lyrics"
              className="form__textarea"
              placeholder="Стихи"
            />
            <Checkbox 
              name="acceptedTerms"
              className="form__input-radio"
              labelClassName="form__input-label"
            >
              <span className="form__input-radio-visible"></span>
              Согласен с{" "}
              <a href="#" className="form__link">
                офертой
              </a>
            </Checkbox>
            <SubmitButton 
              name="submit"
              className="form__input-submit"
              disabled={ isSubmitting | (Object.keys(errors).length > 0) | !values.acceptedTerms }
            />             
            {incorrectRequest ? (
              <span className="form__submit-error">Упс, что-то пошло не так и форма не отправилась, попробуйте ещё раз!</span>
            ) : <span className="form__submit-error_hidden"></span>}  
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddAuthorForm;
