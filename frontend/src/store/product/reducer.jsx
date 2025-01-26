import React from "react";
import {
  ADD_NEW_PRODUCT_REQUEST,
  ADD_NEW_PRODUCT_SUCCESS,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_SHOP_REQUEST,
  GET_SHOP_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
} from "./action_type";

const initialState = {
  products: [],
  loading: false,
  error: null,
  page: null,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_REQUEST:
    case ADD_NEW_PRODUCT_REQUEST:
    case GET_SHOP_REQUEST:
      return { ...state, loading: true, products: [] };
    case DELETE_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_PRODUCTS_SUCCESS:
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case GET_SHOP_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.data,
        page: action.payload.meta,
      };
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        loading_product: true,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading_product: false,
        product: action.payload,
      };
    case ADD_NEW_PRODUCT_SUCCESS:
    case UPDATE_PRODUCT_SUCCESS:
      return { ...state, loading: false };
    case GET_ALL_PRODUCTS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default ProductReducer;
