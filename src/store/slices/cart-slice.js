import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += product.quantity;
      } else {
        state.cartItems.push({
          ...product,
          cartItemId: uuidv4(),
        });
      }
    },
    decreaseQuantity: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },
    deleteFromCart: (state, action) => {
      const cartItemId = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.cartItemId !== cartItemId
      );
    },
    deleteAllFromCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, decreaseQuantity, deleteFromCart, deleteAllFromCart } = cartSlice.actions;
export default cartSlice.reducer;