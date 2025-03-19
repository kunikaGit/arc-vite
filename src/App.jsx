import { Routes, Route, Link } from "react-router-dom";
import { Checkout, Home } from "./pages/index.js";
import Home2 from "./pages/home2.jsx";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
  );
}
