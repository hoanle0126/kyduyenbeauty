import React, { createContext, useContext } from "react";

const StateContext = createContext({
  product: null,
  cart: [],
  setProduct: () => {},
  setCart: () => {},
});

const ThemeContext = ({ children }) => {
  const [cart, setCart] = React.useState([]);

  return (
    <StateContext.Provider value={{ cart, setCart }}>
      {children}
    </StateContext.Provider>
  );
};

export default ThemeContext;

export const useStateContext = () => useContext(StateContext);
