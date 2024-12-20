import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
    },
    updateProfile: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.error = null;
    }
  }
});

export const { loginStart, loginSuccess, loginFailure, logout, updateProfile } = authSlice.actions;
export default authSlice.reducer;
