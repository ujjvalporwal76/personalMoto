import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import Productpage from "./components/ProductPage/Productpage";
import Loginpage from "./components/LoginPage/Loginpage";
import Signuppage from "./components/SignUpPage/Signuppage";
import Sellerpage from "./components/SellerPage/Sellerpage";
import Watchedadspage from "./components/Watchedadsearchpage/Watchedadspage";
import Watchedsearchpage from "./components/Watchedadsearchpage/Watchedsearchpage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Statisticspage from "./components/UserPages/StatisticsPage/Statisticspage";
import Createadpage from "./components/CreateAdPage/Createadpage";
import Advertisementspage from "./components/UserPages/AdvertisementsPage/Advertisementspage";
import Newspage from "./components/UserPages/NewsPage/Newspage";
import Paymentspage from "./components/UserPages/PaymentsPage/Paymentspage";
import Settingspage from "./components/UserPages/SettingsPage/Settingspage";
import Logoutpage from "./components/LogOutPage/Logoutpage";
import Paymentfail from "./components/PaymentPage/Paymentfail";
import Paymentpass from "./components/PaymentPage/Paymentpass";
import Adplanpage from "./components/AdPlanPage/Adplanpage";
import { ProtectedRoute } from "./ProtectedRoute/Protectroute";
import { AuthProvider } from "./ContextAPI/AuthProvider";
import { Toaster } from "react-hot-toast";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="product/:productId" element={<Productpage />} />
          <Route path="signup" element={<Signuppage />} />
          <Route path="login" element={<Loginpage />} />
          <Route path="start-selling" element={<Sellerpage />} />
          <Route path="create-ad-page" element={<Createadpage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="watched-page-ads" element={<Watchedadspage />} />
            <Route
              path="watched-page-searches"
              element={<Watchedsearchpage />}
            />

            <Route path="myaccount-statistics" element={<Statisticspage />} />
            <Route
              path="myaccount-advertisements"
              element={<Advertisementspage />}
            />
            <Route path="myaccount-news/:newsId" element={<Newspage />} />
            <Route
              path="myaccount-payments/:paymentsId"
              element={<Paymentspage />}
            />
            <Route
              path="myaccount-settings/:settingsId"
              element={<Settingspage />}
            />
            <Route path="payment/fail" element={<Paymentfail />} />
            <Route path="payment/success" element={<Paymentpass />} />
            <Route path="payment/adplanselect" element={<Adplanpage />} />
          </Route>
          <Route path="logout" element={<Logoutpage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </AuthProvider>
);
