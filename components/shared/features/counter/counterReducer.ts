interface CounterState {
  count: number;
  status: "idle" | "loading" | "failed";
}

const initialState: CounterState = {
  count: 0,
  status: "idle",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "COUNT_INCRESE":
      return {
        ...state,
        count: state.count + 1,
      };
    case "COUNT_DECRESE":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
