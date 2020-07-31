import {
  FETCH_MEMBERS_REQUEST,
  FETCH_MEMBERS_SUCCESS,
  FETCH_MEMBERS_FAILURE,
} from "./membersTypes";

const initialState = {
  loading: false,
  member: {},
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEMBERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FETCH_MEMBERS_SUCCESS:
      return {
        loading: false,
        member: action.payload || initialState.member,
      };
    case FETCH_MEMBERS_FAILURE:
      return {
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
