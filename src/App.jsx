import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home.jsx";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  );
}
