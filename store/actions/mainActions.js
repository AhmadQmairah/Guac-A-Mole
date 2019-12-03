import instance from "./instance";
import { FETCH_AUTHORS, FILTER_AUTHORS } from "./actionTypes";

export const fetchAuthors = () => {
  return async dispatch => {
    try {
      const res = await instance.get("/api/authors/");
      const authors = res.data;
      dispatch({ type: actionTypes.FETCH_AUTHORS, payload: authors });
    } catch (err) {
      console.error(err);
    }
  };
};
