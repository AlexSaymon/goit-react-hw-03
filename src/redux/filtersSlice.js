import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const selectFilters = (state) => state.filter.name;

export const { changeFilter } = slice.actions;
export const filterReducer = slice.reducer;
