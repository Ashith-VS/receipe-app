import { useContext } from "react";
import {AllMenuContext} from "./AllMenuContext";

function Popup({ closePopupHandler, currentDish,AddToCartHandler}) {
  
  const allMenu = useContext(AllMenuContext);

  let result = allMenu
    .filter((item) => {
      return item.strMeal == currentDish;
    })
    .map((item) => {
      return (
        <div className="popup-content-inner">
          <div className="popup-inner">
            <img src={item.strMealThumb} alt="" />
            <h5 className="popup-inner-category">{item.strCategory}</h5>
          </div>
          <h2>{item.strMeal}</h2>
          <p>{item.strInstructions}</p>

          <ul className="dish-ingredient flex">
            <li>{item.strIngredient1}</li>
            <li>{item.strIngredient2}</li>
            <li>{item.strIngredient3}</li>
            <li>{item.strIngredient4}</li>
          </ul>
          <button onClick={()=>{AddToCartHandler(item.strMealThumb, item.strMeal)}}>Order Now</button>
        <h5 className="popup-close" onClick={closePopupHandler}> Close</h5>
        </div>
      );
    });


    // rendering
  return (
    <div className="popup">
      <div className="popup-content">
        {result}
      </div>
    </div>
  );
}

export default Popup;
