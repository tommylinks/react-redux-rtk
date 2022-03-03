import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import depositSlice from '@pages/deposit/slices/depositSlice';
import { pokemonApi } from '@src/utils/services/app';

export const store = configureStore({
  reducer: {
    borrow: depositSlice,
    // deposit: depositReducer,
    // portfolio: portfolioReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
