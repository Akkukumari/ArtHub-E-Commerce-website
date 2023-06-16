import { Route, Routes } from "react-router-dom";
import  Homepage  from "../Pages/Homepage";
import  Login from "../Pages/Login";

import SignUp from "../Pages/SignUp";
import ShopHomepage from "../Pages/ShopHomePage";
import Product from "../Pages/Product";


export default function  MainRoute () {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/shopnow" element={<ShopHomepage />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
};
