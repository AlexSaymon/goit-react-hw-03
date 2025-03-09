import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const goItApi = axios.create({
  baseURL: "https://connections-api.goit.global",
});

const setAuthHeader = (token) => {
  goItApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  goItApi.defaults.headers.common.Authorization = ``;
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await goItApi.post("/users/signup", credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (err) {
      thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const response = await goItApi.post("users/login", credentials);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (err) {
    thunkAPI.rejectWithValue(err.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await goItApi.post("/users/logout");
    clearAuthHeader();
  } catch (err) {
    thunkAPI.rejectWithValue(err.message);
  }
});

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const savedToken = thunkAPI.getState().auth.token;
  console.log(savedToken);

  if (!savedToken) {
    return thunkAPI.rejectWithValue("Token is not existing");
  }

  try {
    setAuthHeader(savedToken);
    const { data } = await goItApi.get("/users/current");
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
