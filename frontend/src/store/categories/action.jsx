import { axiosClient } from "../../config/axiosClient";
import {
  ADD_NEW_CATEGORY_FAILURE,
  ADD_NEW_CATEGORY_REQUEST,
  ADD_NEW_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILURE,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE,
  GET_ALL_CATEGORIES_REQUEST,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_CATEGORY_FAILURE,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAILURE,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_SUCCESS,
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

export const addNewCategory = (category) => async (dispatch) => {
  dispatch({ type: ADD_NEW_CATEGORY_REQUEST });
  try {
    axiosClient
      .post("/categories", category)
      .then((data) => {
        dispatch({ type: ADD_NEW_CATEGORY_SUCCESS, payload: data.data });
      })
      .catch((e) => {
        dispatch({ type: ADD_NEW_CATEGORY_FAILURE, payload: e });
      });
  } catch (error) {
    dispatch({ type: ADD_NEW_CATEGORY_FAILURE, payload: e });
  }
};

export const getCategory = (id) => async (dispatch) => {
  dispatch({ type: GET_CATEGORY_REQUEST });
  try {
    axiosClient
      .get("/categories/" + id)
      .then((data) => {
        dispatch({ type: GET_CATEGORY_SUCCESS, payload: data.data });
      })
      .catch((e) => {
        dispatch({ type: GET_CATEGORY_FAILURE, payload: e });
      });
  } catch (error) {
    dispatch({ type: GET_CATEGORY_FAILURE, payload: e });
  }
};

export const updateCategory = (id, category) => async (dispatch) => {
  dispatch({ type: UPDATE_CATEGORY_REQUEST });
  try {
    axiosClient
      .put("/categories/" + id, category)
      .then((data) => {
        dispatch({ type: UPDATE_CATEGORY_SUCCESS, payload: data.data });
      })
      .catch((e) => {
        dispatch({ type: UPDATE_CATEGORY_FAILURE, payload: e });
      });
  } catch (error) {
    dispatch({ type: UPDATE_CATEGORY_FAILURE, payload: e });
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  dispatch({ type: DELETE_CATEGORY_REQUEST });
  try {
    axiosClient
      .delete("/categories/" + id)
      .then((data) => {
        dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: data.data });
      })
      .catch((e) => {
        dispatch({ type: DELETE_CATEGORY_FAILURE, payload: e });
      });
  } catch (error) {
    dispatch({ type: DELETE_CATEGORY_FAILURE, payload: e });
  }
};
