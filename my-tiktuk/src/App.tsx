import React from "react";
import { Route, Routes } from "react-router";
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
        <Route path="/user" element={<User {...getOnePost()} />} />
      </Routes>
    </>
  );
}

export default App;
