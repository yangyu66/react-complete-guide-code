import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateditems = state.items.concat(action.item);
    const total = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updateditems,
      totalAmount: total,
    };
  }

  return defaultCart;
};

const CartProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, defaultCart);

  const addItemHandler = (item) => {
    cartDispatch({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
