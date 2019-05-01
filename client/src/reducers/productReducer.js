import { GET_PRODUCTS, PRODUCTS_LOADING, ADD_TO_CART } from "../actions/types";

const inititalState = {
  products: [],
  loading: false,
  cart: []
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

    case ADD_TO_CART:
      return {
        ...state,
        cart: [action.payload, ...state.cart]
      };

    default:
      return state;
  }
}
