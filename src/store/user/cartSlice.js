import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    setCartItems: (state, action) => {
      state.items = action.payload;
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeCartItem: (state, action) => {
      // action.payload = index of item to remove
      state.items.splice(action.payload, 1);
    },
  },
});

export const { setCartItems, clearCart, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
