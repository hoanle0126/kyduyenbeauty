import { axiosClient } from "../../config/axiosClient";
import {
  ADD_NEW_ORDER_FAILURE,
  ADD_NEW_ORDER_REQUEST,
  ADD_NEW_ORDER_SUCCESS,
  GET_ALL_ORDERS_FAILURE,
  GET_ALL_ORDERS_REQUEST,
  GET_ALL_ORDERS_SUCCESS,
} from "./action_type";

export const getAllOrders = () => async (dispatch) => {
  dispatch({ type: GET_ALL_ORDERS_REQUEST });
  try {
    axiosClient
      .get("/orders")
      .then((data) => {
        dispatch({ type: GET_ALL_ORDERS_SUCCESS, payload: data.data });
      })
      .catch((e) => {
        dispatch({ type: GET_ALL_ORDERS_FAILURE, payload: e });
      });
  } catch (error) {
    dispatch({ type: GET_ALL_ORDER_FAILURE, payload: e });
  }
};

export const addNewOrder = (order, action) => async (dispatch) => {
  dispatch({ type: ADD_NEW_ORDER_REQUEST });
  try {
    axiosClient
      .post("/orders", order)
      .then((data) => {
        dispatch({ type: ADD_NEW_ORDER_SUCCESS, payload: data.data });
      })
      .catch((e) => {
        dispatch({ type: ADD_NEW_ORDER_FAILURE, payload: e });
      });
  } catch (error) {
    dispatch({ type: ADD_NEW_ORDER_FAILURE, payload: error });
  }
};
