import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Car from "./pages/Car";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AppLayout from "./pages/AppLayout";
import axios from "axios";
import api from "./api/api";
import CarDetail from "./pages/CarDetail";
import { CarProvider } from "./contexts/CarContext";

function App() {
  return (
    <CarProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path='/' element={<Home />} />
            <Route path='car' element={<Car />} />
            <Route path='car/:id' element={<CarDetail />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CarProvider>
  );
}

export default App;
