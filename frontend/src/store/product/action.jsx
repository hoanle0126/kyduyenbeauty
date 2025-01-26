import { axiosClient } from "../../config/axiosClient";
import {
  ADD_NEW_PRODUCT_FAILURE,
  ADD_NEW_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_SHOP_FAILURE,
  GET_SHOP_REQUEST,
  GET_SHOP_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_SUCCESS,
} from "./action_type";

export const getAllProduct = () => async (dispatch) => {
  dispatch({ type: GET_ALL_PRODUCTS_REQUEST });
  try {
    axiosClient.get(`/all-products`).then((data) => {
      dispatch({
        type: GET_ALL_PRODUCTS_SUCCESS,
        payload: data.data,
      });
    });
  } catch (error) {
    dispatch({ type: GET_ALL_PRODUCTS_FAILURE, error: null });
  }
};

export const getShopProduct = () => async (dispatch) => {
  const { search } = window.location; // Lấy query string hiện tại
  const searchParams = new URLSearchParams(search);

  dispatch({ type: GET_SHOP_REQUEST });
  try {
    axiosClient.get(`/products?${searchParams.toString()}`).then((data) => {
      dispatch({
        type: GET_SHOP_SUCCESS,
        payload: data.data,
      });
    });
  } catch (error) {
    dispatch({ type: GET_SHOP_FAILURE, error: null });
  }
};

export const getProductByKey = (key_name) => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST });
  try {
    axiosClient.get(`/products/${key_name}`).then((data) => {
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: data.data,
      });
    });
  } catch (error) {
    dispatch({ type: GET_PRODUCT_FAILURE, error: null });
  }
};

export const createProduct = (product, action) => async (dispatch) => {
  // dispatch({ type: GET_PRODUCT_REQUEST });
  try {
    console.log(product);
    axiosClient
      .post("/products", product)
      .then((data) => {
        dispatch({
          type: ADD_NEW_PRODUCT_SUCCESS,
          payload: data.data,
        });
        action();
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (error) {
    dispatch({ type: ADD_NEW_PRODUCT_FAILURE, error: null });
  }
};

export const updateProduct =
  (product, key_name, action) => async (dispatch) => {
    // dispatch({ type: GET_PRODUCT_REQUEST });
    try {
      console.log(product);
      axiosClient
        .put("/products/" + key_name, product)
        .then((data) => {
          dispatch({
            type: UPDATE_PRODUCT_SUCCESS,
            payload: data.data,
          });
          action();
        })
        .catch((e) => {
          console.log("error", e);
        });
    } catch (error) {
      dispatch({ type: UPDATE_PRODUCT_FAILURE, error: null });
    }
  };

export const deleteProduct = (id, action) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_REQUEST });
  try {
    console.log("delete", id);
    axiosClient
      .delete("/products/" + id)
      .then((data) => {
        dispatch({
          type: DELETE_PRODUCT_SUCCESS,
          payload: data.data,
        });
        action();
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (error) {
    dispatch({ type: DELETE_PRODUCT_FAILURE, error: null });
  }
};
