import { createSlice } from '@reduxjs/toolkit';

const cartContentSlice = createSlice({
  name: 'cartContent',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = action.payload;
      const existingItem = state.find((item) => item.id === itemToAdd.id);

      if (existingItem) {
        existingItem.count += 1;
        alert("This pizza was already added to cart, +1 !");
      } else {
        state.push({ ...itemToAdd, count: 1 });
        alert("Pizza has been added to cart!");
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      return state.filter((item) => item.id !== id);
    },
    incrementAmount: (state, action) => {
      const { id } = action.payload;
      const itemToIncrement = state.find((item) => item.id === id);

      if (itemToIncrement) {
        itemToIncrement.count += 1;
      }
    },
    decrementAmount: (state, action) => {
      const { id } = action.payload;
      const itemToDecrement = state.find((item) => item.id === id);

      if (itemToDecrement) {
        if (itemToDecrement.count > 1) {
          itemToDecrement.count -= 1;
        }
      }
    },
    clearCart: (state) => {
        return [];
    },
  },
});

export const { addToCart, removeFromCart, incrementAmount, decrementAmount, clearCart } = cartContentSlice.actions;
export const selectCart = state => state.cartContent;
export default cartContentSlice.reducer;
