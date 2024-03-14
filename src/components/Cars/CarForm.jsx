import React from "react";
import Input from "../Reusable/Input";
import styling from "./Cars.module.css";
import SelectBox from "../Reusable/SelectBox";
import Button from "../Reusable/Button";
import useForm from "../../hooks/useForm";
import { useCars } from "../../contexts/CarContext";
function CarForm() {
  const { addNewCar } = useCars();
  const onSubmit = () => {
    addNewCar(values);
  };
  const { handleChange, values, handleSubmit } = useForm(
    {
      name: "",
      model: "",
      personCount: 0,
      type: "",
      gasType: "",
      img: "",
    },
    onSubmit
  );

  return (
    <div className={styling.car__form__container}>
      <h2>Car form</h2>
      <form className={styling.car__form} onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='Car name'
          name='name'
          onChange={handleChange}
        />
        <Input
          type='file'
          placeholder='Image'
          name='img'
          onChange={handleChange}
        />
        <Input
          type='text'
          placeholder='Model'
          name='model'
          onChange={handleChange}
        />
        <Input
          type='number'
          placeholder='Person count'
          name='personCount'
          onChange={handleChange}
        />
        <SelectBox onChange={handleChange} name='type'>
          <option value='Sedan'>Sedan</option>
          <option value='Jeep'>Jeep</option>
          <option value='Van'>Van</option>
        </SelectBox>
        <SelectBox onChange={handleChange} name='gasType'>
          <option value='Gas'>Gasoline</option>
          <option value='Electric'>Electric</option>
        </SelectBox>

        <Button type='submit' style={{ width: "100px", margin: "10px" }}>
          Add
        </Button>
      </form>
    </div>
  );
}

export default CarForm;
