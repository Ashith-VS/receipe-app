import Header from "./Header";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import { AllMenu } from "./AllMenuContext";
import Checkout from "./Checkout";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";


const Menus = () => {
  return (
    <>
      <Header />
      <Hero/>
      <AllMenu>
        <Routes>
          <Route path="/special" element={<SpecialDishes />} />
          <Route index element={<FilteredDishes />} />
        </Routes>
      </AllMenu>
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Menus;
