import React from "react";

const SubmitButton = ({ className, disabled, children, ...props }) => {
  return (
    <button 
      type="submit" 
      className={disabled ? `${className} ${className}_inactive` : className} 
      disabled={disabled}
      {...props}
    >
        { children }
    </button>          
  );
};

export default SubmitButton;