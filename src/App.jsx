import { Routes, Route, Link } from "react-router-dom";
import { AboutUs, Checkout, ComingSoon, Faq, Home, PrivacyPolicy, TermsAndCondition } from "./pages/index.js";
import Home2 from "./pages/home2.jsx";
import './assets/scss/index.scss'

export default function App() {
  return (
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home2 />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms-condition" element={<TermsAndCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
  );
}
