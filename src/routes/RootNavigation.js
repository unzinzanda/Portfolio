import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeContainer from "../components/Home/containers";

const RootNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigation;
