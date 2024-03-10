import React from "react";
import styling from "./Cars.module.css";
function CarTable() {
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
          <tr>
            <td>F10</td>
            <td>BMW</td>
            <td>12</td>
            <td>Sedan</td>
            <td>Gase</td>
          </tr>
          <tr>
            <td>F10</td>
            <td>BMW</td>
            <td>12</td>
            <td>Sedan</td>
            <td>Gase</td>
          </tr>
          <tr>
            <td>F10</td>
            <td>BMW</td>
            <td>12</td>
            <td>Sedan</td>
            <td>Gase</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CarTable;
