import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainRouter, AdminRouter } from "./index";

const App = () => (
  <Routes>
    <Route path="/admin" element={<AdminRouter />} />
    <Route path="/" element={<MainRouter />} />
  </Routes>
);

export default App;
