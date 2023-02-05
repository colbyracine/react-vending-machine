import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import "./App.css";
import "./NavBar.css";

import Soda from "./Soda";
import Chips from "./Chips";
import Sardines from "./Sardines";
import VendingMachine from "./VendingMachine";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/VendingMachine" element={<VendingMachine />} />
          <Route exact path="/Soda" element={<Soda />} />
          <Route exact path="/Chips" element={<Chips />} />
          <Route exact path="/Sardines" element={<Sardines />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </main>
  );
}

export default App;
