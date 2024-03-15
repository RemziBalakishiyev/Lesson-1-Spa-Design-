import React from "react";
import styling from "./Reausable.module.css";
function Button({ children, style, type = "submit", onClick }) {
  return (
    <button
      type={type}
      className={styling.button}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
