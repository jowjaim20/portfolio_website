import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import NumberGenerator from "./components/Numberagenerstor";
import LottoHenyo from "./components/LottoHenyo";

function App() {
  return (
    <div className=" flex justify-center items-center  w-screen  border-2">
      <LottoHenyo />
    </div>
  );
}

export default App;
