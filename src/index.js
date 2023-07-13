import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.scss';
import App from './App';
import { Header } from './components/Header/Header';
import { About } from './pages/About/About';
import Footer from './components/Footer/Footer';
import Property from './pages/Property/Property';
import Notfound from './pages/Notfound/Notfound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/apropos" element={<About />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/property/:id" element={<Property />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
