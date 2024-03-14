import React from "react";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import HomeBanner from "../components/Homes/HomeBanner";
import HomeFilter from "../components/Homes/HomeFilter";
import CarCard from "../components/Homes/CarCard";
import styling from "../components/Homes/Home.module.css";
function Home({ cars }) { //cars = 
  return (
    <div>
      <HomeBanner></HomeBanner>
      <HomeFilter />
      <div className={styling["card-container"]}>
        {cars.map((car) => (
          <CarCard
            key={car.id}
            img={car.img}
            model={car.model}
            name={car.name}
            type={car.type}
            gasType={car.gasType}
            personCount={car.personCount}
            price={car.price}
          />
        ))}
      </div>

      <Link to='/car'>Car</Link>
    </div>
  );
}

export default Home;
