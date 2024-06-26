import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ShopPage from "./components/ShopPage/ShopPage";
import HomePage from "./components/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
