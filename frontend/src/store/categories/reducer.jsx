import {
  GET_ALL_CATEGORIES_FAILURE,
  GET_ALL_CATEGORIES_REQUEST,
  GET_ALL_CATEGORIES_SUCCESS,
} from "./actionType";

const initialState = {
  loading: true,
  categories: [],
  error: null,
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_CATEGORIES_SUCCESS:
      return { ...state, loading: false, categories: action.payload };
    case GET_ALL_CATEGORIES_FAILURE:
      return { ...state, loading: true };

    default:
      return state;
  }
};
