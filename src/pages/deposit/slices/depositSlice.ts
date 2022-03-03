import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@utils/store';

interface BorrowState {
  value: number;
}

const initialState: BorrowState = {
  value: 0,
};

export const borrowSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = borrowSlice.actions;

export const selectCount = (state: RootState) => state.borrow.value;

export default borrowSlice.reducer;
