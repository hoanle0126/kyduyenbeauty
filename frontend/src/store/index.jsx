import React from "react";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import ProductReducer from "./product/reducer";
import { categoryReducer } from "./categories/reducer";
import { OrderReducer } from "./orders/reducer";

const rootReducers = combineReducers({
  products: ProductReducer,
  categories: categoryReducer,
  orders: OrderReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
