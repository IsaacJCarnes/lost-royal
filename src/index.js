import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/index.css';
import App from './js/App';
import Board from './js/Board';

ReactDOM.createRoot(document.getElementById('root')
).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/lost-royal/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);