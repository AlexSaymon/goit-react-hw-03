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
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const selectContacts = (state) => state.contact.contacts.items;

export const { addContact, deleteContact } = slice.actions;
export const contactReducer = slice.reducer;
