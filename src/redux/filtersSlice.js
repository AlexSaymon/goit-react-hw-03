import { createSlice } from "@reduxjs/toolkit";
import ContactData from "/src/ContactData.json";

const initialState = {
  contacts: {
    items: [...ContactData],
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
      state.name = action.payload;
    },
  },
});

export const selectFilters = (state) => state.filter.filters;

export const { changeFilter } = slice.actions;
export const filterReducer = slice.reducer;
