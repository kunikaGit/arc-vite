import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AboutUs, AccountOverview, Accounts, Billing, Checkout, ComingSoon, Faq, FundedLongue, Home, Leaderboard, Login, Merchandise, MyProfile, PrivacyPolicy, Signup, TermsAndCondition, WithdrawalStep2, WithdrawalStep3 } from "./pages/index.js";
import Home2 from "./pages/home2.jsx";
import './assets/scss/index.scss'
import 'react-calendar/dist/Calendar.css';
import 'react-modern-drawer/dist/index.css'
import TermsConditionTabs from "./pages/termsAndCondition/termsconditionstabs.jsx";
import ScrollToTop from "./component/common/scrolltop.jsx";
import DashboardLayout from "./pages/dashboard/layout.jsx";
import StripeCheckoutDemo from "./component/stripe/stripe.jsx";
import { Toaster } from "react-hot-toast";
import SuccessStatus from "./pages/status/successStatus.jsx";
import FailedStatus from "./pages/status/failedStatus.jsx";
import ForgetPassword from "./pages/forgetAndResetPassword/forgetPassword.jsx";
import ResetPassword from "./pages/forgetAndResetPassword/resetPassword.jsx";
import EmailVerification from "./pages/status/emailVerification.jsx";
import TelegramSignup from "./pages/signup/telegramSignup.jsx";
import TelegramLoginStatus from "./pages/status/telegramLoginStatus.jsx";
import { useNavigate } from 'react-router-dom';
import { logout } from '../src/redux/slice/authSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import { autoLogout } from "../src/utlis/autoLogout.js"
import TradingDashboard from "./dashboard-components/TradingDashboard.jsx";
import FlowContainer from "./component/arc-flow/FlowContainer.jsx";
import EconomyCalendar from "./pages/economy-calendar/index.jsx";
export default function App() {
  const navigate = useNavigate();
  const { auth_token } = useSelector((state) => state.auth);
  const dispatch = useDispatch()

  useEffect(() => {
    if (auth_token) {
      autoLogout(auth_token, () => {
        dispatch(logout());
        navigate("/login");
      });
    }
  }, [auth_token, dispatch, navigate]);
  return (
    <>
      <ScrollToTop />
      <Toaster position="top-right" reverseOrder={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Home2 />} /> */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms-condition" element={<TermsAndCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/terms-use" element={<TermsConditionTabs />} />
        <Route path="/stripe-payment" element={<StripeCheckoutDemo />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/success" element={<SuccessStatus />} />
        <Route path="/failed" element={<FailedStatus />} />
        <Route path="/build-arc" element={<FlowContainer />} />

        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/verify-email" element={<EmailVerification />} />
        <Route path="/telegram-auth" element={<TelegramSignup />} />
        <Route path="/telegram-login-auth" element={<TelegramLoginStatus />} />


        {/* -----------for dashboard routing--------------- */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<TradingDashboard />} />
          <Route path="/dashboard/economy" element={<EconomyCalendar />} />
          <Route path="/dashboard/account-overview" element={<AccountOverview />} />
          <Route path="/dashboard/withdrawal" element={<FundedLongue />} />
          <Route path="/dashboard/withdrawal/step2" element={<WithdrawalStep2 />} />
          <Route path="/dashboard/withdrawal/step3" element={<WithdrawalStep3 />} />
          <Route path="/dashboard/merchandise" element={<Merchandise />} />
          <Route path="/dashboard/leaderboard" element={<Leaderboard />} />
          <Route path="/dashboard/myprofile" element={<MyProfile />} />
          <Route path="/dashboard/billing" element={<Billing />} />
        </Route>

      </Routes>
    </>
  );
}
