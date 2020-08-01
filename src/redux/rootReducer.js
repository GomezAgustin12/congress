import { combineReducers } from "redux";
import membersReducer from "./members/membersReducer";
import detailedReducer from "./detailed/detailedReducer";

const rootReducer = combineReducers({
  detailed: detailedReducer,
  members: membersReducer,
});

export default rootReducer;
