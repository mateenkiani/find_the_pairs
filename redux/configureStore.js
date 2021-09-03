import { combineReducers, createStore } from "redux";
import scoreCardReducer from "./ducks/ScoreCard";

const reducer = combineReducers({
  ScoreCard: scoreCardReducer
});

const store = createStore(reducer);

export default store;
