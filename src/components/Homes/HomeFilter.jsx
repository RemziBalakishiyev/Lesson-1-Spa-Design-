import React, { useContext, useState } from "react";
import styling from "./Home.module.css";
import Input from "../Reusable/Input";
import SelectBox from "../Reusable/SelectBox";
import Button from "../Reusable/Button";
import { useCars } from "../../contexts/CarContext";
function HomeFilter() {
  const [filterForm, setFilterForm] = useState({
    query: "",
    type: "",
    priceType: "",
  });
  const { getSearchedCars } = useCars();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleFilter = (e) => {
    e.preventDefault();
    console.log(filterForm);
    getSearchedCars(filterForm.query, filterForm.type, filterForm.priceType);
  };

  return (
    <div className={styling["filter-container"]}>
      <h4>Booking Now</h4>
      <form onSubmit={handleFilter}>
        <Input
          type='text'
          placeholder='Search'
          name='query'
          onChange={handleChange}
        />
        <SelectBox name='type' onChange={handleChange}>
          <option value='sedan'>Sedan</option>
          <option value='jeep'>Jeep</option>
          <option value='van'>Van</option>
        </SelectBox>

        <SelectBox onChange={handleChange}>
          <option value='1'>High</option>
          <option value='2'>Low</option>
        </SelectBox>
        <button type='submit'>Apply</button>
      </form>
    </div>
  );
}

export default HomeFilter;
