import { combineReducers } from "redux";
// import postsReducers from "./postsReducers";
import postReducers from "./postReducers";

export default combineReducers({
  // posts: postsReducers,
  post: postReducers,
});
