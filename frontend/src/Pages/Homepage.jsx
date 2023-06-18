import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link as RouterLink } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "./Shop.home/Footer";

export default function Homepage() {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8800/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setArts(res))
      .catch((err) => console.log(err));
  }, []);

  console.log("arts 21", arts);

  return (
  
    <div >
  <Header/>
      <div className="image-grid">
      {arts.map((el) => (
        <div className="image-item" key={el._id}>
          <RouterLink  to={`/product/${el._id}`} state={{ data: el }}>
         <img src={el.img} alt={el.img} />
          </RouterLink>
        </div>
      ))}
    </div>
    
    <Footer/>
     
    </div>
  );
}
