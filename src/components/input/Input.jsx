import React from "react";
import "./input.scss";

function Input(props) {
  const { type, placeholder, value, onChange } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange ? (e) => onChange(e) : null}
    />
  );
}

export default Input;
