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
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const selectContacts = (state) => state.contact.contacts.items;

export const { addContact, deleteContact } = slice.actions;
export const contactReducer = slice.reducer;
