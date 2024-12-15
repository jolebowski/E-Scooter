import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order, CartItem } from '../types';

interface OrderState {
  orders: Order[];
  currentOrder: Order | null;
  loading: boolean;
  error: string | null;
}

const initialState: OrderState = {
  orders: [],
  currentOrder: null,
  loading: false,
  error: null
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    createOrder: (state, action: PayloadAction<{ items: CartItem[], total: number }>) => {
      const newOrder: Order = {
        id: Date.now(),
        date: new Date().toISOString(),
        items: action.payload.items,
        total: action.payload.total,
        status: 'En attente',
        trackingNumber: `TR-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
      };
      state.currentOrder = newOrder;
    },
    confirmOrder: (state) => {
      if (state.currentOrder) {
        state.currentOrder.status = 'Confirmée';
        state.orders.push(state.currentOrder);
        state.currentOrder = null;
      }
    },
    clearCurrentOrder: (state) => {
      state.currentOrder = null;
    }
  }
});

export const { createOrder, confirmOrder, clearCurrentOrder } = orderSlice.actions;
export default orderSlice.reducer;
