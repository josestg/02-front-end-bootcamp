import { createSlice } from "@reduxjs/toolkit";

/**
 * [
 *  {
 *    id: 1,
 *    title: "Product #1",
 *    price: 150_000
 *  }
 * ]
 */
const initialProducts = {
  loading: true,
  products: [],
  error: null,
};

function handleBuy(state, action) {}

/**
 *
 * @param {initialProducts} state
 * @param {{type: string, payload: []}} action
 *
 * @returns {state}
 */
function handleInit(state, action) {
  state.products = action.payload;
  return state;
}

const productSlice = createSlice({
  name: "products", // products/<action-name>
  initialState: initialProducts,
  reducers: {
    init: handleInit,
    buy: handleBuy,
    setError: (state, action) => {
      state.error = action.payload;
      return state;
    },
    startLoading: (state) => {
      state.loading = true;
      return state;
    },
    stopLoading: (state) => {
      state.loading = false;
      return state;
    },
  },
});

// action creators
export const { init, buy, setError, startLoading, stopLoading } =
  productSlice.actions;

export default productSlice.reducer;
