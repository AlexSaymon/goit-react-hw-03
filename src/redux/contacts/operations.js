import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://671bd2bf2c842d92c3816f17.mockapi.io";

export const fetchContacts = createAsyncThunk("contact/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/contacts");
    console.log(response);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const addContacts = createAsyncThunk(
  "contact/addContact",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", body);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.messahe);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (err) {
      thunkAPI.rejectWithValue(err.message);
    }
  }
);
