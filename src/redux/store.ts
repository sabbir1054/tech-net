import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';
import CartReducer from './features/cart/cartSlice';
import ProductReducer from './features/products/productsSlice';
const store = configureStore({
  reducer: {
    cart: CartReducer,
    product: ProductReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
