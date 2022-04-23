import { combineReducers } from "redux";
import trailerReducer from "./trailerReducer";
import postReducers from "./postReducers";

export default combineReducers({
  trailer: trailerReducer,
  post: postReducers,
});
