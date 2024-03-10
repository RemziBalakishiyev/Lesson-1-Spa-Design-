import React from "react";
import Input from "../Reusable/Input";
import styling from "./Cars.module.css";
import SelectBox from "../Reusable/SelectBox";
import Button from "../Reusable/Button";
function CarForm() {
  return (
    <div className={styling.car__form__container}>
      <h2>Car form</h2>
      <form className={styling.car__form}>
        <Input type='text' placeholder='Car name' name='carname' />
        <Input type='text' placeholder='Model' name='model' />
        <Input type='number' placeholder='Person count' name='personCount' />
        <SelectBox>
          <option value='1'>Sedan</option>
          <option value='2'>Jeep</option>
          <option value='3'>Van</option>
        </SelectBox>
        <SelectBox>
          <option value='1'>Gasoline</option>
          <option value='3'>Electric</option>
        </SelectBox>

        <Button style={{ width: "100px", margin: "10px" }}> Add</Button>
      </form>
    </div>
  );
}

export default CarForm;
