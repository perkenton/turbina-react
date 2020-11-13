import React from "react";
import { useField } from "formik";

const TextInput = ({ className, errorClassName, ...props }) => {
  const [field, meta] = useField(props);
    
  return (
    <>
      <input 
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

export default TextInput;