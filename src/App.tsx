import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import NumberGenerator from "./components/Numberagenerstor";
import LottoHenyo from "./pages/LottoHenyo";
import HomePage from "./pages/HomePage";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const [page, setPage] = useState(<LottoHenyo />);
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/calculator">Calc</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<LottoHenyo />} />
        <Route path="/calculator" element={<HomePage />} />
        <Route path="/game" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
