import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state: any, action: any) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item: any) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.cartItems.push({...newItem, quantity: newItem.quantity});
      }
      state.totalAmount += newItem.price * newItem.quantity;
    },
    removeItemFromCart: (state: any, action: any) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item: any) => item.id === id);
      if (existingItem) {
        state.cartItems = state.cartItems.filter((item: any) => item.id !== id);
        state.totalAmount -= existingItem.price * existingItem.quantity;
      }
    },
    updateItemQuantity: (state: any, action: any) => {
      const {id, quantity} = action.payload;
      const existingItem = state.cartItems.find((item: any) => item.id === id);
      if (existingItem) {
        state.totalAmount -= existingItem.price * existingItem.quantity;
        existingItem.quantity = quantity;
        state.totalAmount += existingItem.price * quantity;
      }
    },
  },
});

export const {addItemToCart, removeItemFromCart, updateItemQuantity} =
  cartSlice.actions;

export default cartSlice.reducer;
