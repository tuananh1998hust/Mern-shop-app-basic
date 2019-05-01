import uuid from "uuid";

import { GET_PRODUCTS } from "../actions/types";

const inititalState = {
  products: [
    {
      _id: uuid(),
      name: "Arduino Basic",
      product_type: 1,
      price: 25,
      description: "Lorem Ipsum is simply dummy text",
      imgUrl: "http://lorempixel.com/400/200/"
    },
    {
      _id: uuid(),
      name: "Arduino Advance",
      product_type: 1,
      price: 30,
      description: "Lorem Ipsum is simply dummy text",
      imgUrl: "http://lorempixel.com/400/200/"
    },
    {
      _id: uuid(),
      name: "C sharp Basic",
      product_type: 1,
      price: 25,
      description: "Lorem Ipsum is simply dummy text",
      imgUrl: "http://lorempixel.com/400/200/"
    }
  ]
};

export default function(state = inititalState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: [...state.products]
      };

    default:
      return state;
  }
}
