import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Productpage from './components/ProductPage/Productpage';
import Loginpage from './components/LoginPage/Loginpage';
import Signuppage from './components/SignUpPage/Signuppage';
import Sellerpage from './components/SellerPage/Sellerpage';
import Watchedadspage from './components/Watchedadsearchpage/Watchedadspage';
import Watchedsearchpage from './components/Watchedadsearchpage/Watchedsearchpage';


import {
  createBrowserRouter,
 
  RouterProvider,
} from "react-router-dom";
import Statisticspage from './components/UserPages/StatisticsPage/Statisticspage';
import Createadpage from './components/CreateAdPage/Createadpage';
import Advertisementspage from './components/UserPages/AdvertisementsPage/Advertisementspage';
import Newspage from "./components/UserPages/NewsPage/Newspage";
import Paymentspage from "./components/UserPages/PaymentsPage/Paymentspage"
import Settingspage from "./components/UserPages/SettingsPage/Settingspage"
import Logoutpage from './components/LogOutPage/Logoutpage';


const router = createBrowserRouter(

  [
    {
      path:"/",
      element:<App/>
    },
    {
      path:"product",
      element:<Productpage/>
    },
    {
      path:"login",
      element:<Loginpage/>
    },
    {
      path:"signup",
      element:<Signuppage/>
    },
    {
      path:"start-selling",
      element:<Sellerpage/>
    },
    {
      path:"watched-page-ads",
      element:<Watchedadspage />
    },
    {
      path:"watched-page-searches",
      element:<Watchedsearchpage />
    },
    {
      path:"myaccount-statistics",
      element:<Statisticspage />
    },
    {
      path:"create-ad-page",
      element:<Createadpage />
    },
    {
      path:"myaccount-advertisements",
      element: <Advertisementspage />,
    },
    {
      path:"myaccount-news/:newsId",
      element: <Newspage />,
    },
    {
      path:"myaccount-payments/:paymentsId",
      element: <Paymentspage />,
    },
    {
      path:"myaccount-settings",
      element: <Settingspage />,
    },
    {
      path:"logout",
      element:<Logoutpage />
    }
  ]
  // createRoutesFromElements(
  //   <Route path="/" element={<App />}>
  //     <Route path="productpage" element={<Productpage />} />
  //     {/* ... etc. */}
  //   </Route>
  // )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
     
  
);



