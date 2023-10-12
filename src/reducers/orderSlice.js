import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showOrder: false,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    showOrder: (state) => {
        state.showOrder = true;
    },
    hideOrder: (state) => {
        state.showOrder = false;
    },
  },
});

export const { showOrder, hideOrder } = orderSlice.actions;
export default orderSlice.reducer;
