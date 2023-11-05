import React, { useContext, useState, useEffect } from "react";
import Pagination from "./Pagination";
import CardData from "./CardData";
import Popup from "./Popup";
import { AllMenuContext } from "./AllMenuContext";
import axios from "axios";

function FilteredDishes() {
  let [category, setCategory] = useState([]);
  let [singleDish, setSingleDish] = useState([]);
  const allMenu = useContext(AllMenuContext);
  let [activeDish, setActive] = useState("Beef");
  let [FilteredDish, setFilteredDishes] = useState([]);
  let [currentPage, SetCurrentPage] = useState(1);
  let [itemsPerPage, setItemsPerPage] = useState(4);
  let endingPosition = currentPage * itemsPerPage;
  let startingPosition = endingPosition - itemsPerPage;
  let showTheDish = FilteredDish.slice(startingPosition, endingPosition);
  let [showPopup, setShowPopup] = useState(false);
  let [currentDish, setCurrentDish] = useState();

  // show popup
  function showPopupHandler(dishName) {
    setShowPopup(true);
    setCurrentDish(dishName);
  }
  // close popup
  function closePopupHandler() {
    setShowPopup(false);
  }

  // GET ALL CATEGORIES
  const getAllItemsCategory = async () =>{
     const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
         setCategory(response.data.categories);
  }
  // console.log(category)

  // get single dish
  const getonlySingleDish = async() => {
    const response =await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=beef")
    setSingleDish(response.data.meals);
  }
  // console.log(singleDish)

  
  useEffect(() => {
    getAllItemsCategory();
    getonlySingleDish();
  }, []);

  // show OneActive item
  let singleItemResult = singleDish.map((item, index) => {
    if (index < 20)
      return <CardData item={item} showPopupHandler={showPopupHandler} />;
  });

  // show dishes onClick
  function FilteredResultsHandler(category) {
    setSingleDish([]);
    setActive(category);
    let filterResults = allMenu
      .filter((item) => {
        return item.strCategory === category;
      })
      .map((item) => {
        return <CardData item={item} showPopupHandler={showPopupHandler} />;
      });
    setFilteredDishes(filterResults);
  }
  
  // lets show all the categories
  let categoryResult = category.map((items) => {
    return (
      <li
        id="li"
        className={items.strCategory === activeDish ? "active" : " "}
        onClick={() => {
          FilteredResultsHandler(items.strCategory);
        }}
      >
        {items.strCategory}
      </li>
    );
  });

  // rendering
  return (
    <section>
    <div className="filtered-dishes">
      {showPopup && (
        <Popup
          closePopupHandler={closePopupHandler}
          currentDish={currentDish}
        />
      )}
      <div className="container">
        <div className="text-center">
          <h2>Choose your dishes</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut vel
            error ducimus hic a placeat ullam quis tempora nostrum maiores.
          </p>
        </div>

        <div className="filtered-dishes">
          <ul className="flex flex-wrap gap-30px ">{categoryResult}</ul>
        </div>

        <div className="filtered-dishes-result">
          <ul className="flex flex-wrap gap-30px">
            {singleItemResult}
            {singleItemResult != 0 || FilteredDish.length != 0 ? (
              showTheDish
            ) : (
              <div className="alert">
                <h2>Sorry,No items found</h2>
                <h4>Please choose another dishes</h4>
              </div>
            )}
          </ul>
        </div>
        <Pagination
          filteredDish={FilteredDish}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          SetCurrentPage={SetCurrentPage}
        />
      </div>
    </div>
    </section>
  );
}

export default FilteredDishes;
