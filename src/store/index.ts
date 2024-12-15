import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import cartReducer from './cartSlice';
import compareReducer from './compareSlice';
import orderReducer from './orderSlice';
import promoReducer from './promoSlice';
import wishlistReducer from './wishlistSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    order: orderReducer,
    wishlist: wishlistReducer,
    compare: compareReducer,
    promo: promoReducer,
  },
});

export interface RootState {
  cart: ReturnType<typeof cartReducer>;
  auth: ReturnType<typeof authReducer>;
  order: ReturnType<typeof orderReducer>;
  wishlist: ReturnType<typeof wishlistReducer>;
  compare: ReturnType<typeof compareReducer>;
  promo: ReturnType<typeof promoReducer>;
}

export type AppDispatch = typeof store.dispatch;
