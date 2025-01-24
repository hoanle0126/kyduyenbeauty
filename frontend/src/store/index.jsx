import React from "react";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import ProductReducer from "./product/reducer";
import { categoryReducer } from "./categories/reducer";

const rootReducers = combineReducers({
  products: ProductReducer,
  categories: categoryReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
