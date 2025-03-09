import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contact.contacts.items;
export const selectFilters = (state) => state.filter.filters.name;

export const selectFilteredContactsMemo = createSelector(
  [selectContacts, selectFilters],
  (items, filters) =>
    items.filter((item) => item.name.toLowerCase().includes(filters.toLowerCase()))
);
