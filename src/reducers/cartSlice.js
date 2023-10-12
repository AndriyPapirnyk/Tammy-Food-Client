import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showCart: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    showCart: (state) => {
      state.showCart = true;
    },
    hideCart: (state) => {
      state.showCart = false;
    },
  },
});

export const { showCart, hideCart } = cartSlice.actions;
export default cartSlice.reducer;
