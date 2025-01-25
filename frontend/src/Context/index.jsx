import React, { createContext, useContext } from "react";

const StateContext = createContext({
  product: null,
  cart: [],
  setProduct: () => {},
  setCart: () => {},
});

const ThemeContext = ({ children }) => {
  const savedCart = JSON.parse(localStorage.getItem("cart_value")) || {
    products: [],
  };
  const [cart, setCart] = React.useState(savedCart);

  React.useEffect(() => {
    localStorage.setItem("cart_value", JSON.stringify(cart));
  }, [cart]);

  return (
    <StateContext.Provider value={{ cart, setCart }}>
      {children}
    </StateContext.Provider>
  );
};

export default ThemeContext;

export const useStateContext = () => useContext(StateContext);
