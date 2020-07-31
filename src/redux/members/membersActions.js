import {
  FETCH_MEMBERS_REQUEST,
  FETCH_MEMBERS_SUCCESS,
  FETCH_MEMBERS_FAILURE,
} from "./membersTypes";

export const fetchMembersRequest = () => {
  return {
    type: FETCH_MEMBERS_REQUEST,
  };
};

export const fetchMembersSuccess = (members) => {
  return {
    type: FETCH_MEMBERS_SUCCESS,
    payload: members,
  };
};

export const fetchMembersFailure = (error) => {
  return {
    type: FETCH_MEMBERS_FAILURE,
    payload: error,
  };
};
