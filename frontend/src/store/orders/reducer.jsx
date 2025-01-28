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
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  UPDATE_ORDER_FAILURE,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
} from "./action_type";

const initialState = {
  loading: false,
  orders: [],
  order: {},
  error: null,
};

export const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS_REQUEST:
    case ADD_NEW_ORDER_REQUEST:
    case GET_ORDER_REQUEST:
    case UPDATE_ORDER_REQUEST:
    case DELETE_ORDER_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_ORDERS_SUCCESS:
    case ADD_NEW_ORDER_SUCCESS:
    case UPDATE_ORDER_SUCCESS:
    case DELETE_ORDER_SUCCESS:
      return { ...state, loading: false, orders: action.payload };
    case GET_ORDER_SUCCESS:
      return { ...state, loading: false, order: action.payload };
    case GET_ALL_ORDERS_FAILURE:
    case ADD_NEW_ORDER_FAILURE:
    case UPDATE_ORDER_FAILURE:
    case DELETE_ORDER_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};
