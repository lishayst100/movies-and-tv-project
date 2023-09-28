import React from 'react';
import ReactDOM from 'react-dom/client';
import './themed-bootstrap.scss'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Nav';
import { IsOpenProvider } from './context/IsOpenContext';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <IsOpenProvider>
      <Navbar />
      <App />
      <Footer />
    </IsOpenProvider>
  </BrowserRouter>
);

reportWebVitals();
