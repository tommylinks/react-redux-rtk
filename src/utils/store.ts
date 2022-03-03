import { configureStore } from '@reduxjs/toolkit';
import depositSlice from '@pages/deposit/slices/depositSlice';

export const store = configureStore({
  reducer: {
    borrow: depositSlice,
    // deposit: depositReducer,
    // portfolio: portfolioReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
