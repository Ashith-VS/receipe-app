import { useState,useContext } from "react";
import CardData from "./CardData";
import Popup from "./Popup";
import {AllMenuContext} from "./AllMenuContext";
import AddToCart from "./AddToCart";
import { Outlet } from "react-router-dom";

function SpecialDishes() {

  const [showPopup, setShowPopup] = useState(false);
  const [currentDish, setCurrentDish] = useState();
  const [addToCartItem, setAddToCartItem] = useState([]);
  const allMenu = useContext(AllMenuContext);

  // show popup
  function showPopupHandler(dishName) {
    setShowPopup(true);
    setCurrentDish(dishName);
  }
  // show close popup
  function closePopupHandler() {
    setShowPopup(false);
  }

  // Add to cart handler
  function AddToCartHandler(addToCartImg, addToCartTitle) {
    setAddToCartItem(
      [
        ...addToCartItem,
      {
        "img" : addToCartImg,
        "title" : addToCartTitle
      }
    ]
    )
  }

  // SPECIAL DISHES
  let maxSpecialDishes = 20;
  let dishesResult = allMenu.map((item, index) => {
    if (index < maxSpecialDishes) {
      return < CardData item={item} showPopupHandler={showPopupHandler} />;
    }
  });

  // rendering
  return (
    <section className="special-dishes">
      {showPopup && (
        <Popup
          closePopupHandler={closePopupHandler}
          currentDish={currentDish}
          AddToCartHandler={AddToCartHandler}
        />
      )}
      <div className="container">
        <AddToCart addToCartItem={addToCartItem} />
        <div className="special-dishes-content  text-center">
          <h2>Special Dishes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            ratione repudiandae praesentium quas mollitia doloremque dolor
            labore veritatis aperiam ab possimus asperiores ex, incidunt ea.
          </p>
        </div>
        <div className="special-dishes-result">
          <ul className="flex flex-wrap gap-30px">{dishesResult}</ul>
        </div>
        <Outlet />
      </div>
    </section>
  );
}

export default SpecialDishes;
