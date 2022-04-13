import { createSlice } from "@reduxjs/toolkit";

interface testState {
  value: string;
  count: number;
  active: boolean;
}

const initialState: testState = {
  value: "initial second test value",
  count: 0,
  active: false,
};

export const secondTest = createSlice({
  name: "second",
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.count -= action.payload;
    },
    toggleState: (state) => {
      state.active = !state.active;
    },
  },
});

export const {
  changeValue,
  incrementByAmount,
  decrementByAmount,
  toggleState,
} = secondTest.actions;
export default secondTest.reducer;
