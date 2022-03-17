import { createSlice } from "@reduxjs/toolkit";

const counterInitialState = {
  loading: false,
  error: null,
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    initCounter: (state, action) => {
      const { payload } = action;
      state.value = payload.counter;
    },
    setLoading: (state, action) => {
      const { payload } = action;
      state.loading = payload.loading;
    },
    setError: (state, action) => {
      const { payload } = action;
      state.error = payload.error;
    },
  },
});

// Action creators are generated for each case reducer function
export const { initCounter, setError, setLoading } = counterSlice.actions;

export function fetchCounterAPI() {
  return async (dispatch, _) => {
    dispatch(setLoading({ loading: true }));

    try {
      const response = await fetch("http://localhost:4000/counters", {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });

      const data = await response.json();
      dispatch(initCounter({ counter: data.value }));
    } catch (error) {
      dispatch(setError({ error: error }));
    } finally {
      dispatch(setLoading({ loading: false }));
    }
  };
}

export default counterSlice.reducer;
