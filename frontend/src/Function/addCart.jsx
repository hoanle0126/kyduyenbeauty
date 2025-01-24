import React from "react";

const addCart = (cart, setCart, shopItem, quantity) => {
  setCart((prevCart) => {
    const index = cart?.findIndex((item) => item.id === shopItem.id);
    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart[index].quantity_cart += 1;
      return updatedCart;
    } else {
      return [...cart, { ...shopItem, quantity_cart: quantity }];
    }
  });
  console.log(cart);
};

export default addCart;
