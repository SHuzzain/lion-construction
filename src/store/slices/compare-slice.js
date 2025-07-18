import { createSlice } from "@reduxjs/toolkit";

const compareSlice = createSlice({
  name: "compare",
  initialState: {
    compareItems: [],
  },
  reducers: {
    addToCompare: (state, action) => {
      const product = action.payload;
      const existingItem = state.compareItems.find(
        (item) => item.id === product.id
      );

      if (!existingItem && state.compareItems.length < 3) {
        state.compareItems.push(product);
      }
    },
    deleteFromCompare: (state, action) => {
      const productId = action.payload;
      state.compareItems = state.compareItems.filter(
        (item) => item.id !== productId
      );
    },
    deleteAllFromCompare: (state) => {
      state.compareItems = [];
    },
  },
});

export const { addToCompare, deleteFromCompare, deleteAllFromCompare } = compareSlice.actions;
export default compareSlice.reducer;