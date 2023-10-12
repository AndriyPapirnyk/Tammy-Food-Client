import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showBurger: false,
};

const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    showBurger: (state) => {
      state.showBurger = true;
    },
    hideBurger: (state) => {
      state.showBurger = false;
    },
  },
});

export const { showBurger, hideBurger } = burgerSlice.actions;
export default burgerSlice.reducer;
