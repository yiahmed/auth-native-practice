import { describe, expect, test } from "@jest/globals";
import { configureStore } from "@reduxjs/toolkit";
import {
  increment,
  decrement,
} from "../components/shared/features/counter/counterSlice";
import counterReducer from "../components/shared/features/counter/counterSlice";
import { RootState } from "../components/shared/store";

describe("counterSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        count: counterReducer,
      },
    });
  });

  it("should handle initial state", () => {
    const initialState: RootState = store.getState();
    expect(initialState.count.value).toBe(0);
    expect(initialState.count.status).toBe("idle");
  });

  it("should handle increment", () => {
    store.dispatch(increment());
    const state: RootState = store.getState();
    expect(state.count.value).toBe(1);
  });

  it("should handle decrement", () => {
    store.dispatch(decrement());
    const state: RootState = store.getState();
    expect(state.count.value).toBe(-1);
  });
});
