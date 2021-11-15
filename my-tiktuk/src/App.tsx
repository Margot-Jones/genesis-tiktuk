import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";
import User from "./pages/User";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Feed />}  />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
