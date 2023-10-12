import React, {useState} from 'react';

import './App.css';
import Home from "./Pages/Home"
import Productpage from './components/ProductPage/Productpage';



// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );



function App() {
  return (
    <div className="App">
      <Home />
      
    </div>
  );
}

export default App;
