import React from "react";
import { useField } from "formik";


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

export default Checkbox;