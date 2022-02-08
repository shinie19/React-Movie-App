import React from "react";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";
import { Route, Routes } from "react-router-dom";

function Routers(props) {
  return (
    <Routes>
      <Route path="/:category/search/:keyword" element={<Catalog />} />
      <Route path="/:category/:id" element={<Detail />} />
      <Route path="/:category" element={<Catalog />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Routers;
