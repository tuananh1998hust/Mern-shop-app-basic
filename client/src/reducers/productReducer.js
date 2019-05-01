import { GET_PRODUCTS, PRODUCTS_LOADING } from "../actions/types";

const inititalState = {
  products: [],
  loading: false
};

export default function(state = inititalState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      };

    case PRODUCTS_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
