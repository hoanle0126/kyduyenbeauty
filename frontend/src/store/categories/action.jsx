import { axiosClient } from "../../config/axiosClient";
import {
  GET_ALL_CATEGORIES_FAILURE,
  GET_ALL_CATEGORIES_REQUEST,
  GET_ALL_CATEGORIES_SUCCESS,
} from "./actionType";

export const getAllCategories = () => async (dispatch) => {
  dispatch({ type: GET_ALL_CATEGORIES_REQUEST });
  try {
    axiosClient
      .get("/categories")
      .then((data) => {
        dispatch({ type: GET_ALL_CATEGORIES_SUCCESS, payload: data.data });
      })
      .catch((e) => {
        dispatch({ type: GET_ALL_CATEGORIES_FAILURE, payload: e });
      });
  } catch (error) {
    dispatch({ type: GET_ALL_CATEGORIES_FAILURE, payload: e });
  }
};
