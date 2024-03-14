import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Car from "./pages/Car";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AppLayout from "./pages/AppLayout";
import { useEffect } from "react";
import api from "./api/api";
import CarDetail from "./pages/CarDetail";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getCars = async () => {
      try {
        const response = await api.get("/cars");
        setData(response.data);
      } catch (error) {
        console.error("There is any error!");
      }
    };
    getCars();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path='/' element={<Home cars={data} />} />
          <Route path='/car' element={<Car />} />
          <Route path='/car/:name' element={<CarDetail />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
