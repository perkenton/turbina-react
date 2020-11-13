import React from "react";
import { useField } from "formik";


const TextArea = ({ className, errorClassName, ...props }) => {
  const [field, meta] = useField(props);
  
  return (
    <>
      <textarea 
        {...field} 
        className={meta.touched && meta.error ? `${className} ${className}_incorrect` : className} 
        {...props} 
      />
      {meta.touched && meta.error ? (
        <span className={errorClassName}>{meta.error}</span>
      ) : (
        <span className={`${errorClassName}_hidden`}></span>
      )}
    </>
  );
};

export default TextArea;