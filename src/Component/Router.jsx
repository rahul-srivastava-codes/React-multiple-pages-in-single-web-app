import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Mini-component/Home";
import Shows from "./Mini-component/Shows";
import Contact from "./Mini-component/Contact";
import Calculator from "./Mini-component/Calculator";
import Components from "./Mini-component/Components";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/shows" element={<Shows></Shows>} />
      <Route path="/contact" element={<Contact></Contact>} />
      <Route path="/calculator" element={<Calculator></Calculator>} />
      <Route path="/components" element={<Components></Components>} />
    </Routes>
  );
}

export default Router;
