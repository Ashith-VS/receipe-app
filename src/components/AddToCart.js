import React from "react";

function AddToCart ({ addToCartItem }){
 
  let CartResult = addToCartItem.map((item) => {
    return (
      <div>
        <img src={item.img} />
        <h6>{item.title}</h6>
      </div>
    );
  });

  // rendering
  return (
    <div className="add-to-cart-wrapper">
      <div className="add-to-cart-items">
        <h6>My Cart</h6>
        {CartResult}
      </div>
    </div>
  );
};
export default AddToCart;
