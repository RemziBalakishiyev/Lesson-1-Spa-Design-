import React from "react";
import styling from "./Reausable.module.css";
function Input({ type, name, placeholder, onChange }) {
  return (
    <div style={{ display: "flex" }}>
      <input
        type={type}
        className={styling.form__input}
        id={name}
        name={name}
        placeholder={placeholder}
        required=''
        onChange={onChange}
        autoComplete='off'
      />
    </div>
  );
}

export default Input;
