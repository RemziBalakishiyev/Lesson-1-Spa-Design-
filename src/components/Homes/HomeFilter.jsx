import React from "react";
import styling from "./Home.module.css";
import Input from "../Reusable/Input";
import SelectBox from "../Reusable/SelectBox";
import Button from "../Reusable/Button";
function HomeFilter() {
  return (
    <div className={styling["filter-container"]}>
      <h4>Booking Now</h4>
      <form>
        <Input type='text' placeholder='Search' name='search' />
        <SelectBox>
          <option value='1'>Sedan</option>
          <option value='2'>Jeep</option>
          <option value='3'>Van</option>
        </SelectBox>

        <SelectBox>
          <option value='1'>High</option>
          <option value='2'>Low</option>
        </SelectBox>
        <button>Apply</button>
      </form>
    </div>
  );
}

export default HomeFilter;
