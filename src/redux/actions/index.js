// import { FETCH_POSTS } from "../types";
import { FETCH_POST } from "../types";
import BASE_URL from "../../apis/baseUrl";

// export const fetchPosts = (requestUrl) => async (dispatch) => {
//   const { data } = await BASE_URL.get(requestUrl);
//   dispatch({ type: FETCH_POSTS, payload: data.results });
// };

export const fetchPost = (URL) => async (dispatch) => {
  const { data } = await BASE_URL.get(URL);
  dispatch({ type: FETCH_POST, payload: data });
};
