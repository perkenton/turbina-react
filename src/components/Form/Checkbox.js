import React from "react";
import { useField } from "formik";


const Checkbox = ({ children, labelClassName, ...props }) => {
  const [field] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className={labelClassName}>
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
    </>
  );
};

export default Checkbox;