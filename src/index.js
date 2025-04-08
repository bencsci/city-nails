import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Book from "./pages/Book";
import About from "./pages/About";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/book" element={<Book />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
