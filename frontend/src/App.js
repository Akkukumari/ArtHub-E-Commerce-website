import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import MainRoute from "./Components/MainRoute";
import Banner from "./Pages/Shop.home/Banner";
import MyCarousel from "./Components/Carousel";

function App() {
  return (
    <div className="App">
      <Navbar />
     
      <MainRoute />
    </div>
  );
}

export default App;
