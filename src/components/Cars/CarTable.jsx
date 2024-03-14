import React from "react";
import styling from "./Cars.module.css";
import { useCars } from "../../contexts/CarContext";
function CarTable() {
  const { cars } = useCars();
  return (
    <div>
      <table className={styling.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Person Count</th>
            <th>Type</th>
            <th>Gas Type</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr>
              <td>{car.name}</td>
              <td>{car.model}</td>
              <td>{car.personCount}</td>
              <td>{car.type}</td>
              <td>{car.gasType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CarTable;
