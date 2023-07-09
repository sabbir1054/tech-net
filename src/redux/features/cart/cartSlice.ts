import { IProduct } from '@/types/globalTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICart {
  products: IProduct[];
}

const initialState: ICart = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const isExist = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (isExist) {
        // isExist.quantity! += 1;
        isExist.quantity = isExist.quantity! + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
