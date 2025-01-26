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
    address: {
      first_name: "",
      last_name: "",
      phone: 0,
      street_address: "",
      city: "",
      state: "",
      zip: "",
      default: true,
    },
    payment: {
      title: "Cash",
      description: "Pay with cash when your order is delivered.",
      icon: "tabler:cash",
    },
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
