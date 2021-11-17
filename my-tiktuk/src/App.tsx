import React from "react";
import { Routes, Route } from "react-router-dom";
import { getOnePost } from "./api/api";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Feed from "./pages/Feed";
import User from "./pages/User";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Feed />}  />
        <Route path="/user/:id?" element={<User {...getOnePost()} />} />
      </Routes>
    </>
  );
}

export default App;
