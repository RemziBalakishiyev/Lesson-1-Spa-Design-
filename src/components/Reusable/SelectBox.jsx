import React from "react";
import styling from "./Reausable.module.css";
function SelectBox({ children }) {
  return (
    <div class={styling.selectdiv}>
      <label>
        <select>{children}</select>
      </label>
    </div>
  );
}

export default SelectBox;
