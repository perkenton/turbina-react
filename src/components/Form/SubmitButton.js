import React from "react";

const SubmitButton = ({ className, disabled, ...props }) => {
  return (
    <button 
      type="submit" 
      className={disabled ? `${className} ${className}_inactive` : className} 
      disabled={disabled}
      {...props}
    >
        Отправить
    </button>          
  );
};

export default SubmitButton;