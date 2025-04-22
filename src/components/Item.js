import React, { useState } from "react";

function Item({ name, category }) {
  // Step 1: Set up state to track if the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Step 2: Toggle handler for adding/removing from cart
  function handleAddToCartClick() {
    setIsInCart((prev) => !prev);
  }

  // Step 3: Update className and button text based on state
  const liClass = isInCart ? "in-cart" : "";
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";
  const buttonClass = isInCart ? "remove" : "add";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleAddToCartClick}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
