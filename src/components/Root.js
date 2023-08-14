import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./Main";

const Root = () => {
  return (
    <div className="navigation">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
};

export default Root;
