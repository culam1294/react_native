import { combineReducers } from "redux";
import isChange from "./IsChange";

const joinReducers = combineReducers({
  isChange: isChange,
});
export default joinReducers;
