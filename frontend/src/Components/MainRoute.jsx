import { Route, Routes } from "react-router-dom";
import  Homepage  from "../Pages/Homepage";
import  Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Product from "../Pages/Product";
import ShopHomepage from "../Pages/Shop.home/ShopHomePage";
import CheckoutPage from "../Pages/Checkout";


export default function  MainRoute () {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/shopnow" element={<ShopHomepage />}  />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
};
