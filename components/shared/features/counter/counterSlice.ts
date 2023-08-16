import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  Action,
} from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}

const initialState: CounterState = {
  value: 0,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const selectCount = (state: RootState) => state.count.value;

export default counterSlice.reducer;
