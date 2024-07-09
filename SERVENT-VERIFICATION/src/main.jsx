import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PrimeReactProvider } from "primereact/api";
import { ToastContainer, toast } from 'react-toastify';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <App />
      <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition: Bounce
/>

<ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition: Bounce
/>
    </PrimeReactProvider>
  </React.StrictMode>
);
