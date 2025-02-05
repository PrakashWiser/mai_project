import React from "react";
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Project from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Works from "./pages/Works";
import Worktops from "./pages/Worktops";
import Footer from "./components/Footer";
export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/works" element={<Works />} />
        <Route path="/worktops" element={<Worktops />} />
      </Routes>
      <Footer />
    </Router>
  );
}
