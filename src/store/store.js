import { configureStore } from '@reduxjs/toolkit';
import burgerReducer from '../reducers/burgerSlice';
import cartSlice from '../reducers/cartSlice';
import cartContentSlice from '../reducers/cartContentSlice';
import orderSlice from '../reducers/orderSlice';

const store = configureStore({
  reducer: {
    burger: burgerReducer,
    cart: cartSlice,
    cartContent: cartContentSlice,
    order: orderSlice,
  },
});

export default store;