import { createAsyncThunk } from "@reduxjs/toolkit";

export type Todo = {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
};

export const fetchToDoList = createAsyncThunk<Todo[]>(
  "todos/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`
      );
      const data = await response.json();
      console.log("data", data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
