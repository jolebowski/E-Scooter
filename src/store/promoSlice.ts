import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PromoCode {
  code: string;
  discount: number; // pourcentage de réduction
  minAmount?: number;
  expiryDate: string;
}

interface PromoState {
  appliedCode: PromoCode | null;
  availableCodes: PromoCode[];
}

const initialState: PromoState = {
  appliedCode: null,
  availableCodes: [
    {
      code: 'WELCOME10',
      discount: 10,
      expiryDate: '2024-12-31'
    },
    {
      code: 'SUMMER20',
      discount: 20,
      minAmount: 500,
      expiryDate: '2023-08-31'
    }
  ]
};

const promoSlice = createSlice({
  name: 'promo',
  initialState,
  reducers: {
    applyPromoCode: (state, action: PayloadAction<string>) => {
      const code = state.availableCodes.find(
        promo => promo.code === action.payload
      );
      if (code) {
        state.appliedCode = code;
      }
    },
    removePromoCode: (state) => {
      state.appliedCode = null;
    }
  }
});

export const { applyPromoCode, removePromoCode } = promoSlice.actions;
export default promoSlice.reducer;
