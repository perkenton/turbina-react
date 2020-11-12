import React from "react";
import { useField } from "formik";

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

export default TextInput;