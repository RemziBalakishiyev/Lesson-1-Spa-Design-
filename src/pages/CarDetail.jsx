import React, { useEffect } from "react";
import Button from "../components/Reusable/Button";
import styling from "../components/Car Detail/CarDetail.module.css";
import { useCars } from "../contexts/CarContext";
import { useParams } from "react-router-dom";
import Loader from "../components/Reusable/Loader";
function CarDetail() {
  const { id } = useParams();
  const { currentCar, getCarById, isLoading } = useCars();

  useEffect(() => {
    getCarById(id);
  }, [id]);
  if (isLoading) return <Loader />;
  return (
    <div className={styling.car__detail}>
      <div className={styling.car__detail__img}>
        <img src={currentCar.img} alt='' />
      </div>
      <div className={styling.car__detail__content}>
        <h5>{currentCar.model}</h5>
        <h4>{currentCar.name}</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          blanditiis voluptatem incidunt omnis officia dolorem eum fuga totam
          quis maxime, labore consectetur doloribus atque recusandae vero earum
          placeat doloremque saepe.
        </p>
        <h3>{currentCar.price}</h3>
        <Button>Book now</Button>
      </div>
    </div>
  );
}

export default CarDetail;
