import React from "react";
import styling from "./Reausable.module.css";
function SelectBox({ children, name, onChange }) {
  return (
    <div class={styling.selectdiv}>
      <label>
        <select name={name} onChange={onChange}>
          {children}
        </select>
      </label>
    </div>
  );
}

export default SelectBox;
