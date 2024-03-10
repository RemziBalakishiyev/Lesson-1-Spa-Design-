import React from "react";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import HomeBanner from "../components/Homes/HomeBanner";
import HomeFilter from "../components/Homes/HomeFilter";
import CarCard from "../components/Homes/CarCard";
import styling from "../components/Homes/Home.module.css";
function Home() {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <HomeFilter />
      <div className={styling["card-container"]}>
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </div>

      <Link to='/car'>Car</Link>
    </div>
  );
}

export default Home;
