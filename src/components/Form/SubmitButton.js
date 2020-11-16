import React from "react";
import classnames from "classnames";

const SubmitButton = ({ className, disabled, children, ...props }) => {
  return (
    <button 
      type="submit" 
      className={ classnames(className, {[`${className}_inactive`] : disabled }) }
      disabled={disabled}
      {...props}
    >
        { children }
    </button>          
  );
};

export default SubmitButton;