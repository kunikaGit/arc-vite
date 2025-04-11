import { Routes, Route, Link } from "react-router-dom";
import { AboutUs, Checkout, ComingSoon, Faq, Home, PrivacyPolicy, TermsAndCondition } from "./pages/index.js";
import Home2 from "./pages/home2.jsx";
import './assets/scss/index.scss'
import TermsConditionTabs from "./pages/termsAndCondition/termsconditionstabs.jsx";
import ScrollToTop from "./component/common/scrolltop.jsx";
import Accounts from "./pages/dashboard/accounts.jsx";
import DashboardLayout from "./pages/dashboard/layout.jsx";
import StripeCheckoutDemo from "./component/stripe/stripe.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home2 />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms-condition" element={<TermsAndCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/terms-use" element={<TermsConditionTabs />} />
        <Route path="/dashboard" element={<DashboardLayout />}/>
        <Route path="/stripe-payment" element={<StripeCheckoutDemo />}>
          <Route index element={<Accounts />} />
        </Route>
      </Routes>
    </>
  );
}
