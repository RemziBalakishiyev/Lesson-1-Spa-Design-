import React from "react";
import Button from "../Reusable/Button";
import styling from "./Home.module.css";
function CarCard({ id, img, name, model, type, personCount, gasType, price }) {
  return (
    <div className={styling.card}>
      <div>
        <img src={img} alt='' />
      </div>
      <div className={styling["card-body"]}>
        <h3>{name}</h3>
        <ul>
          <li>
            <span>
              <i class='fa-solid fa-user-tie'></i>
            </span>
            {personCount}
          </li>
          <li>
            <span>
              <i class='fa-solid fa-gas-pump'></i>
            </span>
            {gasType}
          </li>
          <li>
            <span>
              <i class='fa-solid fa-car-side'></i>
            </span>
            {type}
          </li>
        </ul>

        <div className={styling["card-footer"]}>
          <div>
            <p>Daily rate from</p>
            <span>{price}</span>
          </div>
          <Button style={{ width: "90px", height: "30px", fontSize: "14px" }}>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
