import { LOAD_MEMBER } from "./detailedTypes";

const initialState = {
  member: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MEMBER:
      return {
        member: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
