import React from 'react';
import { BrowserRouter } from "react-router-dom";
import AllRoutes from './utils/routes/routes';
import Header from './components/header/header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
