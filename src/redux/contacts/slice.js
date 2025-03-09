import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContacts, deleteContact, fetchContacts } from "./operations";
const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
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

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          (item) => item.id !== action.payload
        );
      })

      .addMatcher(
        isAnyOf(fetchContacts.pending, addContacts.pending, deleteContact.pending),
        (state) => {
          state.contacts.error = false;
          state.contacts.loading = true;
        }
      )

      .addMatcher(
        isAnyOf(fetchContacts.rejected, addContacts.rejected, deleteContact.rejected),
        (state) => {
          state.contacts.error = true;
          state.contacts.loading = false;
        }
      )

      .addMatcher(
        isAnyOf(fetchContacts.fulfilled, addContacts.fulfilled, deleteContact.fulfilled),
        (state) => {
          state.contacts.loading = false;
        }
      );
  },
});

export const contactReducer = slice.reducer;
