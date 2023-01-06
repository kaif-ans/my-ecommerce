import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import ProductsPage from "./ProductsPage";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import OrderPlaced from "./OrderPlaced";
import SignUp from "./SignUp";
import Login from "./Login";
import { useLocation } from "react-router-dom";
import User from "./User";

function App() {
  let location = useLocation();

  return (
    <div>
      {location.pathname !== "/signup" && location.pathname !== "/login" && (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderplaced" element={<OrderPlaced />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
