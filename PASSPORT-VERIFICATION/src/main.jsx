import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primereact/resources/themes/saga-blue/theme.css';  // Choose the theme you are using
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <PrimeReactProvider>
    <App />
  </PrimeReactProvider>
</React.StrictMode>
)
