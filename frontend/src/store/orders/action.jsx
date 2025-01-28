import { axiosClient } from "../../config/axiosClient";
import {
  ADD_NEW_ORDER_FAILURE,
  ADD_NEW_ORDER_REQUEST,
  ADD_NEW_ORDER_SUCCESS,
  DELETE_ORDER_FAILURE,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  GET_ALL_ORDERS_FAILURE,
  GET_ALL_ORDERS_REQUEST,
  GET_ALL_ORDERS_SUCCESS,
  GET_ORDER_FAILURE,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  UPDATE_ORDER_FAILURE,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
} from "./action_type";
import moment from "moment-timezone";

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
  const timeInZone = moment()
    .tz(import.meta.env.VITE_APP_TIMEZONE)
    .format("YYYY-MM-DD HH:mm:ss z");

  try {
    axiosClient
      .post("/orders", {
        ...order,
        status: [{ title: "Order Placed", created_at: timeInZone }],
      })
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

export const getOrderById = (id) => async (dispatch) => {
  dispatch({ type: GET_ORDER_REQUEST });
  try {
    axiosClient
      .get("/orders/" + id)
      .then((data) => {
        console.log(data);
        dispatch({ type: GET_ORDER_SUCCESS, payload: data.data });
      })
      .catch((e) => {
        dispatch({ type: GET_ORDER_FAILURE, payload: e });
      });
  } catch (error) {
    dispatch({ type: GET_ORDER_FAILURE, payload: error });
  }
};

export const updateOrder = (id, order) => async (dispatch) => {
  dispatch({ type: UPDATE_ORDER_REQUEST });
  try {
    axiosClient
      .put("/orders/" + id, order)
      .then((data) => {
        console.log(data);
        dispatch({ type: UPDATE_ORDER_SUCCESS, payload: data.data });
      })
      .catch((e) => {
        dispatch({ type: UPDATE_ORDER_FAILURE, payload: e });
      });
  } catch (error) {
    dispatch({ type: UPDATE_ORDER_FAILURE, payload: error });
  }
};

export const deleteOrder = (id) => async (dispatch) => {
  dispatch({ type: DELETE_ORDER_REQUEST });
  try {
    axiosClient
      .delete("/orders/" + id)
      .then((data) => {
        console.log(data);
        dispatch({ type: DELETE_ORDER_SUCCESS, payload: data.data });
      })
      .catch((e) => {
        dispatch({ type: DELETE_ORDER_FAILURE, payload: e });
      });
  } catch (error) {
    dispatch({ type: DELETE_ORDER_FAILURE, payload: error });
  }
};
