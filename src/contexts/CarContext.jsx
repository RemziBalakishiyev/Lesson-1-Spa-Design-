import { createContext, useState, useEffect, useContext } from "react";
import api from "../api/api";

const CarContext = createContext();

function CarProvider({ children }) {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCar, setCurrentCar] = useState({});
  const [filteredCars, setFilteredCars] = useState([]);
  useEffect(() => {
    const getCarList = async () => {
      try {
        setIsLoading(true);
        const cars = await api.get("/cars");
        setCars(cars.data);
        setFilteredCars(cars.data);
      } catch (error) {
        alert("There was an error loading  the car list.");
      } finally {
        setIsLoading(false);
      }
    };
    getCarList();
  }, []);

  const addNewCar = async (newCar) => {
    try {
      setIsLoading(true);
      const car = await api.post("/cars", newCar);
      setFilteredCars((prev) => [...prev, car.data]);
      setCars((prev) => [...prev, car.data]);
    } catch (error) {
      alert("There was an error loading  the car list.");
    } finally {
      setIsLoading(false);
    }
  };

  const getSearchedCars = (query, type, price) => {
    setFilteredCars(cars);
    let filtered = filteredCars;

    if (query) {
      filtered = filtered.filter((car) =>
        car.name.toUpperCase().includes(query.toUpperCase())
      );
    }
    if (type) {
      filtered = filtered.filter(
        (car) => car.type.toUpperCase() == type.toUpperCase()
      );
    }
    if (price) {
      filtered = filtered.sort((carA, carB) => carA.price - carB.price);
    }
    console.log(filtered);
    setFilteredCars(filtered);
  };

  const getCarById = async (id) => {
    try {
      setIsLoading(true);
      const cars = await api.get(`/cars/${id}`);
      console.log(cars);
      setCurrentCar(cars.data);
    } catch (error) {
      alert("There was an error loading  the car list.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CarContext.Provider
      value={{
        cars,
        isLoading,
        getCarById,
        currentCar,
        getSearchedCars,
        filteredCars,
        addNewCar,
      }}
    >
      {children}
    </CarContext.Provider>
  );
}

function useCars() {
  const context = useContext(CarContext);

  return context;
}
export { CarProvider, useCars };
