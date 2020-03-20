import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Footer } from '../../components/partials'
import { BrowserRouter } from "react-router-dom";
import { Routes } from "../../routes";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
