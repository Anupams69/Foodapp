import { createContext, useEffect, useState } from "react";
import { food_list } from "../Assets/assets";

export let StoreContext = createContext(null);

let StoreContextProvider = (props) => {
  let [cartItems, setCartItems] = useState({});
  let addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  let removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId - 1] }));
  };
  let getTotalCartAmt = () => {
    let totalAmt = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmt += itemInfo.price * cartItems[item];
      }
    }
    return totalAmt
  };
  let contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmt
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
