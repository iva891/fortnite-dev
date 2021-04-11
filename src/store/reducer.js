import {ActionType} from './action';

const initialState = {
  goods: [],
  loading: true,
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GOODS:
      return {
        ...state,
        goods: action.payload
      };
    case ActionType.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ActionType.ADD_CART_ITEM:
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            id: action.id, 
            quantity: 1,
            price: action.price
          },
        ]
      };
    case ActionType.INCREASE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.map((item) => (
          item.id === action.payload ?
          {
          ...item, 
          quantity: item.quantity + 1
        } :
        {
          ...item
        })),
      };
    case ActionType.DECREASE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.map((item) => (
          item.id === action.payload ?
          {
          ...item, 
          quantity: item.quantity - 1
        } :
        {
          ...item
        })),
      };
    case ActionType.REMOVE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.splice(0, state.cart.findIndex(elem => elem.id === action.payload))
              .concat(state.cart.splice(state.cart.findIndex((elem) => (elem.id === action.payload)) + 1, state.cart.length - 1)),
      };
    case ActionType.DELETE_ALL_ITEMS:
      return {
        ...state,
        cart: [],
      };
    default:
      return {...state};
  }
};

export {reducer};