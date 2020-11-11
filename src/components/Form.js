import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const TextInput = ({ className, ...props }) => {
  const [field, meta] = useField(props);
    
  return (
    <>
      <input 
        {...field} 
        className={meta.touched && meta.error ? `${className} ${className}_incorrect` : className} 
        {...props} 
      />
      {meta.touched && meta.error ? (
        <span className={`${className}-error`}>{meta.error}</span>
      ) : (
        <span className={`${className}-error_hidden`}></span>
      )}
    </>
  );
};

const TextArea = ({ className, ...props }) => {
  const [field, meta] = useField(props);
  
  return (
    <>
      <textarea 
        {...field} 
        className={meta.touched && meta.error ? `${className} ${className}_incorrect` : className} 
        {...props} 
      />
      {meta.touched && meta.error ? (
        <span className="form__input-error">{meta.error}</span>
      ) : (
        <span className="form__input-error_hidden"></span>
      )}
    </>
  );
};

const Checkbox = ({ children, labelClassName, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className={labelClassName}>
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <span className="form__input-error">{meta.error}</span>
      ) : <span className="form__input-error_hidden"></span>}
    </>
  );
};

const AddAuthorForm = () => {
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
            .required("Обязательное поле"),
          email: Yup.string()
            .email("Некорректный формат эл.почты")
            .required("Обязательное поле"),
          lyrics: Yup.string()
            .required("Обязательное поле"),
          acceptedTerms: Yup.boolean()
            .required("Обязательное поле")
        })}

        onSubmit={async (values, { setSubmitting }) => {
          await new Promise(r => setTimeout(r, 500));
          setSubmitting(false);
        }}

      >
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

          <button type="submit" className="form__input-submit">Отправить</button>
        </Form>
      </Formik>
    </>
  );
};

export default AddAuthorForm;
