import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primereact/resources/themes/saga-blue/theme.css';  // Choose your theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Tailwind from "primereact/passthrough/tailwind";


ReactDOM.createRoot(document.getElementById('root')).render(
  <PrimeReactProvider value={{ pt: Tailwind }}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </PrimeReactProvider>
)
