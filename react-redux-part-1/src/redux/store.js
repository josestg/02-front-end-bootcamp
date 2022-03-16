import { createStore } from "redux";
import {
  ACTION_ADD_PRODUCT_TO_CART,
  ACTION_DEL_PRODUCT_FROM_CART,
  ACTION_INIT_PRODUCTS,
} from "./action";
import {
  addProductCartReducer,
  delProductCartReducer,
  initProductReducer,
} from "./reducer";

const initialState = {
  products: [], // list of product
  cartProducts: [], // [{id: 1, count: 5}]
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
    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
