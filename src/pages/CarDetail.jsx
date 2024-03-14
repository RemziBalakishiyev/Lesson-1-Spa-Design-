import React from "react";
import { useParams } from "react-router-dom";

function CarDetail() {
  const param = useParams();
  console.log(param.name);
  return <div>CarDetail</div>;
}

export default CarDetail;
