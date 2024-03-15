import React from "react";
import { Link, NavLink } from "react-router-dom";
import PageNav from "../components/PageNav";
import HomeBanner from "../components/Homes/HomeBanner";
import HomeFilter from "../components/Homes/HomeFilter";
import CarCard from "../components/Homes/CarCard";
import styling from "../components/Homes/Home.module.css";

import { useCars } from "../contexts/CarContext";
function Home() {
  const { cars, filteredCars } = useCars();
  console.log(filteredCars);
  return (
    <div>
      <HomeBanner></HomeBanner>
      <HomeFilter />
      <div className={styling["card-container"]}>
        {filteredCars.map((car) => (
          <CarCard
            id={car.id}
            key={car.id}
            name={car.name}
            gasType={car.gasType}
            img={car.img}
            model={car.model}
            personCount={car.personCount}
            price={car.price}
            type={car.type}
            
          />
        ))}
      </div>

      <Link to='/car'>Car</Link>
    </div>
  );
}

export default Home;
