import { takeLatest, put, call } from "redux-saga/effects";
import {
  FETCH_MEMBERS_REQUEST,
  FETCH_MEMBERS_SUCCESS,
  FETCH_MEMBERS_FAILURE,
} from "./membersTypes";
import { fetchMembers } from "../../api";

function* auxFunction() {
  try {
    const members = yield call(fetchMembers);
    yield put({
      type: FETCH_MEMBERS_SUCCESS,
      payload: members.results[0].members,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: FETCH_MEMBERS_FAILURE,
    });
  }
}

export function* memberSaga() {
  yield takeLatest(FETCH_MEMBERS_REQUEST, auxFunction);
}
