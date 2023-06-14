import { Route, Routes } from "react-router-dom";
import  Homepage  from "../Pages/Homepage";
import  Login from "../Pages/Login";

export default function  MainRoute () {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
