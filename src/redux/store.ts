import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './features/cart/cartSlice';
import ProductReducer from './features/products/productsSlice';
const store = configureStore({
  reducer: {
    cart: CartReducer,
    product: ProductReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
