import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Car from "./pages/Car";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AppLayout from "./pages/AppLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path='/' element={<Home />} />
          <Route path='car' element={<Car />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
