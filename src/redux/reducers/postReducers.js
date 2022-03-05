import { FETCH_POST } from "../types";

export default function fetchingPost(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      return action.payload;
    default:
      return state;
  }
}
