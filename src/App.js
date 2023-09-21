import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Slider from "./components/slider/Slider";
import Virtual from "./components/virtual/Virtual";
import Products from "./components/Products/Products";
import Testimonals from "./components/Testimonals/Testimonals";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonals />
      <Footer />
    </div>
  );
}

export default App;
