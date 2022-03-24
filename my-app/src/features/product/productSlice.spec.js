import { configureStore } from "@reduxjs/toolkit";

import productReducer, {
  init,
  setError,
  startLoading,
  stopLoading,
} from "./productSlice";

test("init product state", () => {
  // Target
  //  Bisa membuat initial product melalui reducer.
  //
  // Caranya:
  //   kita bakal dispacth sebuah action.
  // Haparannya:
  // 1. Kita harus bisa ngecek apakah state kita set tadi sudah berada didalam state global (state nya redux).

  // Masalahnya ketika kita menggunakan redux,
  // kita hanya bisa dispacth sebuah action melalui store.
  const store = configureStore({
    reducer: {
      productReducer: productReducer,
    },
  });

  const initialProducts = [
    {
      id: 1,
      title: "product #1",
      price: 150_000,
    },
  ];

  const action = init(initialProducts);
  store.dispatch(action);

  const state = store.getState();

  // state = state global/ state yang berisi semua state reducers.
  expect(state.productReducer.products).toEqual(initialProducts);
});

test("start loading", () => {
  // Target
  //  Membuat state.loading = true
  //
  // Caranya:
  //   kita bakal dispacth sebuah action.
  // Haparannya:
  // 1. Kita harus bisa ngecek apakah state.loading sudah = true.

  // Masalahnya ketika kita menggunakan redux,
  // kita hanya bisa dispacth sebuah action melalui store.
  const store = configureStore({
    reducer: {
      productReducer: productReducer,
    },
  });

  const action = startLoading();
  store.dispatch(action);

  const state = store.getState();

  // state = state global/ state yang berisi semua state reducers.
  expect(state.productReducer.loading).toEqual(true);
});

test("stop loading", () => {
  // Target
  //  Membuat state.loading = true
  //
  // Caranya:
  //   kita bakal dispacth sebuah action.
  // Haparannya:
  // 1. Kita harus bisa ngecek apakah state.loading sudah = true.

  // Masalahnya ketika kita menggunakan redux,
  // kita hanya bisa dispacth sebuah action melalui store.
  const store = configureStore({
    reducer: {
      productReducer: productReducer,
    },
  });

  const action = stopLoading();
  store.dispatch(action);

  const state = store.getState();

  // state = state global/ state yang berisi semua state reducers.
  expect(state.productReducer.loading).toEqual(false);
});

test("set error", () => {
  // Target
  //  Membuat state.loading = true
  //
  // Caranya:
  //   kita bakal dispacth sebuah action.
  // Haparannya:
  // 1. Kita harus bisa ngecek apakah state.loading sudah = true.

  // Masalahnya ketika kita menggunakan redux,
  // kita hanya bisa dispacth sebuah action melalui store.
  const store = configureStore({
    reducer: {
      productReducer: productReducer,
    },
  });

  const action = setError("my error");
  store.dispatch(action);

  const state = store.getState();

  // state = state global/ state yang berisi semua state reducers.
  expect(state.productReducer.error).toEqual("my error");
});
