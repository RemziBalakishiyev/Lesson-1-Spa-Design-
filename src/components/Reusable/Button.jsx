import React from "react";
import styling from "./Reausable.module.css";
function Button({ children, style }) {
  return (
    <button className={styling.button} style={style}>
      {children}
    </button>
  );
}

export default Button;
