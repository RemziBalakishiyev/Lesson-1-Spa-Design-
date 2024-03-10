import React from "react";
import Button from "../Reusable/Button";
import styling from "./Home.module.css";
function CarCard() {
  return (
    <div className={styling.card}>
      <div>
        <img
          src='https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1830&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
        />
      </div>
      <div className={styling["card-body"]}>
        <h3>Jeep XD</h3>
        <ul>
          <li>
            <span>
              <i class='fa-solid fa-user-tie'></i>
            </span>
            5
          </li>
          <li>
            <span>
              <i class='fa-solid fa-gas-pump'></i>
            </span>
            Gasoline
          </li>
          <li>
            <span>
              <i class='fa-solid fa-car-side'></i>
            </span>
            Suv
          </li>
        </ul>

        <div className={styling["card-footer"]}>
          <div>
            <p>Daily rate from</p>
            <span>200$</span>
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
