import { combineReducers } from "redux";
import membersReducer from "./members/membersReducer";

const rootReducer = combineReducers({
  members: membersReducer,
});

export default rootReducer;
