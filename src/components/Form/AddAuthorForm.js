import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextInput from "./TextInput";
import TextArea from "./TextArea";
import Checkbox from "./Checkbox";
import SubmitButton from "./SubmitButton";

import api from './../../utils/api';

const AddAuthorForm = () => {
  const [okResult, setOkResult] = React.useState(true);
  const [isSend, setSend] = React.useState(false);

  return (
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
        const isSuccessful = await api.addAuthor(values); 

        setOkResult(isSuccessful);                      
        setSubmitting(false);  

        if (!isSend) setSend(true);          
        if (isSuccessful) resetForm();
      }}

    >
      {({ isSubmitting, errors, values, touched }) => (
        <Form className="form">
          <TextInput
            type="text"
            name="author"
            className="form__input"
            errorClassName="form__input-error"
            placeholder="Имя и фамилия автора"
          />
          <TextInput
            type="tel" 
            name="phone" 
            className="form__input" 
            errorClassName="form__input-error"
            placeholder="Телефон"
          />
          <TextInput
            type="email"
            name="email"
            className="form__input"
            errorClassName="form__input-error"
            placeholder="Почта"
          />
          <TextArea
            name="lyrics"
            className="form__textarea"
            errorClassName="form__input-error"
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
          >
            { isSubmitting 
              ? <div className="form__spinner"></div> 
              : isSend && okResult && (Object.keys(touched).length === 0) 
                ? "Форма отправлена" 
                : "Отправить форму"
            }
          </SubmitButton>             
          { !isSubmitting && !okResult && <span className="form__submit-result form__submit-result_invalid">
              Упс, что-то пошло не так и форма не отправилась, попробуйте ещё раз!
            </span> }
        </Form>
      )}
    </Formik>
  );
};

export default AddAuthorForm;
