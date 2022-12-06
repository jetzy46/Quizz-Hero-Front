import React from "react";
import { Route, Routes } from "react-router-dom";
import { Landing, HomePage, Profil, Settings, CategoryPage } from "../index";
import { ConditionsGenerales, Credits, PolitiqueDeConf } from "../index";

const MainRouter = () => (
  <Routes>
    <Route path="/" exact element={<Landing />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/category/:id" element={CategoryPage} />
    <Route path="/profil/:id" element={Profil} />
    <Route path="/settings" exact element={Settings} />

    <Route path="/conditions-generales" element={ConditionsGenerales} />
    <Route path="/credits" element={Credits} />
    <Route path="/politique-de-confidentialite" element={PolitiqueDeConf} />
  </Routes>
);

export default MainRouter;
