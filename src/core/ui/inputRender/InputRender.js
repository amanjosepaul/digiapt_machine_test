import React from "react";

const InputRender = (props) => {
  const { className, type, placeholder, onChange, required, autoFocus } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      required={required}
      autoFocus={autoFocus}
      onChange={onChange}
    />
  );
};

export default InputRender;
