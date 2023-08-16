import { createStore, combineReducers } from "redux";
import CountReducer from "./features/counter/counterReducer";

const rootReducer = combineReducers({
  count: CountReducer,
});

export const store = createStore(rootReducer);
