import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  ACTION_ADD_PRODUCT_TO_CART,
  ACTION_DEL_PRODUCT_FROM_CART,
  ACTION_INIT_PRODUCTS,
  ACTION_SET_PRODUCT_CART,
  ACTION_UNUSED_DISCONT,
  ACTION_USE_DISCONT,
} from "./action";
import {
  addProductCartReducer,
  delProductCartReducer,
  initProductReducer,
  unUsedDiscontReducer,
  takeDiscontReducer,
  initProductCartReducer,
} from "./reducer";

const initialState = {
  products: [], // list of product
  cartProducts: [], // [{id: 1, count: 5, cartid: []}]
  coupons: [
    {
      name: "REACT",
      rate: 0.2,
    },
    {
      name: "REDUX",
      rate: 0.5,
    },
  ],
  usedCoupons: [],
};

/**
 * Create a "reducer" function that determines what the new state
 * should be when something happens in the app.
 * @param {initialState} state
 * @param {{type: string, payload: any}} action
 *
 * @returns {initialState}
 */
function reducer(state = initialState, action) {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  switch (action.type) {
    case ACTION_INIT_PRODUCTS:
      return initProductReducer(state, action.payload);
    case ACTION_ADD_PRODUCT_TO_CART:
      return addProductCartReducer(state, action.payload);
    case ACTION_DEL_PRODUCT_FROM_CART:
      return delProductCartReducer(state, action.payload);
    case ACTION_USE_DISCONT:
      return takeDiscontReducer(state, action.payload);
    case ACTION_UNUSED_DISCONT:
      return unUsedDiscontReducer(state, action.payload);
    case ACTION_SET_PRODUCT_CART:
      return initProductCartReducer(state, action.payload);
    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state;
  }
}

const composed = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(reducer, composed);

export default store;
