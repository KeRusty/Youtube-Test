import React from 'react';
import { BrowserRouter } from "react-router-dom";
import AllRoutes from './utils/routes/routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
