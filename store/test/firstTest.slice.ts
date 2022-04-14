import { createSlice } from "@reduxjs/toolkit";
import { fetchToDoList } from "./fetch.thunk";

interface firstTestState {
  text: string;
  todoList: any;
  currentRequestId: string;
  loading: string;
  error: string;
}

const initialState: firstTestState = {
  text: "initial first test value",
  todoList: ["a", "b", "c"],
  currentRequestId: "",
  loading: "fin",
  error: "",
};

export const firstTest = createSlice({
  name: "first",
  initialState,
  reducers: {
    changeText: (state, { payload }) => {
      console.log("firstTest changeText payload", payload);
      state.text = payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchToDoList.fulfilled, (state: any, action: any) => {
      // Add user to the state array
      state.todoList = action.payload;
    });
  },
});

export const { changeText } = firstTest.actions;
export default firstTest.reducer;
