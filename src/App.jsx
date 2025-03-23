import { Routes, Route, Link } from "react-router-dom";
import { Checkout, ComingSoon, Home } from "./pages/index.js";
import Home2 from "./pages/home2.jsx";

export default function App() {
  return (
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home2 />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
  );
}
