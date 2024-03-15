import {
  createContext,
  useState,
  useEffect,
  useContext,
  useReducer,
} from "react";
import api from "../api/api";

const CarContext = createContext();
const initialState = {
  cars: [],
  currentCar: {},
  filteredCars: [],
  isLoading: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "cars/loaded":
      return {
        ...state,
        isLoading: false,
        cars: action.payload,
        filteredCars: action.payload,
      };

    case "car/loaded": {
      return {
        ...state,
        isLoading: false,
        currentCar: action.payload,
      };
    }
    case "car/filtered":
      return {
        ...state,
        isLoading: false,
        filteredCars: [...action.payload],
      };
    case "car/created":
      return {
        ...state,
        isLoading: false,
        cars: [...state.cars, action.payload],
        filteredCars: [...state.cars, action.payload],
      };

    default:
      throw new Error("There is any error!");
  }
};

function CarProvider({ children }) {
  const [{ cars, currentCar, filteredCars, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const getCarList = async () => {
      dispatch({ type: "loading" });
      try {
        const cars = await api.get("/cars");
        dispatch({ type: "cars/loaded", payload: cars.data });
      } catch (error) {
        alert("There was an error loading  the car list.");
      }
    };
    getCarList();
  }, []);

  const addNewCar = async (newCar) => {
    dispatch({ type: "loading" });
    try {
      const car = await api.post("/cars", newCar);
      dispatch({ type: "car/created", payload: car });
    } catch (error) {
      alert("There was an error loading  the car list.");
    }
  };
  const getSearchedCars = (query, type, price) => {
    let filtered = [...cars];

    if (query) {
      const queryUpperCase = query.toUpperCase();
      filtered = filtered.filter((car) =>
        car.name.toUpperCase().includes(queryUpperCase)
      );
    }

    if (type) {
      const typeUpperCase = type.toUpperCase();
      filtered = filtered.filter(
        (car) => car.type.toUpperCase() === typeUpperCase
      );
    }

    if (price === "low" || price === "high") {
      const sortedFiltered = filtered.slice().sort((carA, carB) => {
        if (price === "low") {
          return carA.price - carB.price;
        } else {
          return carB.price - carA.price;
        }
      });
      filtered = sortedFiltered;
    }

    dispatch({ type: "car/filtered", payload: filtered });
  };

  const clearFilter = () => {
    dispatch({ type: "cars/loaded", payload: cars });
  };

  const getCarById = async (id) => {
    dispatch({ type: "loading" });
    try {
      const cars = await api.get(`/cars/${id}`);
      console.log(cars);
      dispatch({ type: "car/loaded", payload: cars });
    } catch (error) {
      alert("There was an error loading  the car list.");
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
        clearFilter,
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
