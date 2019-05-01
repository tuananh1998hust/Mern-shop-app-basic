import axios from "axios";

import { GET_PRODUCTS, PRODUCTS_LOADING, ADD_TO_CART } from "./types";

export const getProducts = () => dispatch => {
  dispatch(setProductsLoading());
  axios.get("/api/products").then(res =>
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    })
  );
};

export const addToCart = product => {
  return {
    type: ADD_TO_CART,
    payload: product
  };
};

export const setProductsLoading = () => {
  return {
    type: PRODUCTS_LOADING
  };
};
