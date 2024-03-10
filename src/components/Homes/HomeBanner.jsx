import React from "react";
import Button from "../Reusable/Button";
import carBanner from "../../assets/carBanner.png";
import styling from "./Home.module.css";
function HomeBanner() {
  return (
    <div className={styling.banner}>
      <div className={styling["banner-content"]}>
        <h1>Enjoy your life with our comfortable cars.</h1>
        <p>Carent, is ready to serve the best experience in car rental.</p>
        <Button>Explore Now</Button>
      </div>
      <div>
        <img src={carBanner} alt='' />
      </div>
    </div>
  );
}

export default HomeBanner;
