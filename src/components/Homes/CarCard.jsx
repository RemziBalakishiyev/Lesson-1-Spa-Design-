import React from "react";
import Button from "../Reusable/Button";
import styling from "./Home.module.css";
import Loader from "../Reusable/Loader";
import { Link, NavLink } from "react-router-dom";
function CarCard({
  isLoading,
  id,
  name,
  model,
  type,
  img,
  price,
  personCount,
  gasType,
}) {
  if (isLoading) return <Loader />;
  return (
    <div className={styling.card}>
      <div>
        <Link to={`car/${id}`}>
          <img src={img} />
        </Link>
      </div>
      <div className={styling["card-body"]}>
        <h3>
          {model} {name}
        </h3>
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
