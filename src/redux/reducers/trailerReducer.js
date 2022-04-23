import { TRAILER_DATA } from "../types";

export default function fetchingPosts(state = {}, action) {
  switch (action.type) {
    case TRAILER_DATA:
      return { ...action.payload };
    default:
      return state;
  }
}
