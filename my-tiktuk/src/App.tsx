import React from "react";
import { Routes, Route } from "react-router-dom";
// import { getOnePost } from "./api/api";
import "./App.css";
import ErrorCatcher from "./components/ErrorCatcher/ErrorCatcher";
import Navbar from "./components/Navbar/Navbar";
import Feed from "./pages/Feed";
import User from "./pages/User";

function App() {
  return (
    <>
      <Navbar />
      <ErrorCatcher />

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/user/:username" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
