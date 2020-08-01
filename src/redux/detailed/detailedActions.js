import { LOAD_MEMBER } from "./detailedTypes";

export const loadMember = (member) => ({
  type: LOAD_MEMBER,
  payload: member,
});
