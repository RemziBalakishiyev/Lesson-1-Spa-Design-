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
import Login from "./pages/Login";
import { AuthProvider } from "./contexts/AuthContext";
import Protected from "./pages/Protected";

function App() {
  return (
    <AuthProvider>
      <CarProvider>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <Protected>
                  <AppLayout />
                </Protected>
              }
            >
              <Route index path='/' element={<Home />} />
              <Route path='car' element={<Car />} />
              <Route path='car/:id' element={<CarDetail />} />
              <Route path='*' element={<NotFound />} />
            </Route>
            <Route element={<Login />} path='/login' />
          </Routes>
        </BrowserRouter>
      </CarProvider>
    </AuthProvider>
  );
}

export default App;
