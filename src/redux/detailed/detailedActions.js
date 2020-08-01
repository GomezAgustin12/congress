import {
  FETCH_ONE_MEMBER_REQUEST,
  FETCH_ONE_MEMBER_SUCCESS,
  FETCH_ONE_MEMBER_FAILURE,
} from "./detailedTypes";

export const fetchOneMemberRequest = () => {
  return {
    type: FETCH_ONE_MEMBER_REQUEST,
  };
};

export const fetchOneMemberSuccess = (member) => {
  return {
    type: FETCH_ONE_MEMBER_SUCCESS,
    payload: member,
  };
};

export const fetchOneMemberFailure = (error) => {
  return {
    type: FETCH_ONE_MEMBER_FAILURE,
    payload: error,
  };
};
