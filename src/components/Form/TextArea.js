import React from "react";
import { useField } from "formik";


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

export default TextArea;