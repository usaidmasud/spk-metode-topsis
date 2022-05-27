import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import instance from "../../../config/instance";
import { IPeople } from "../../interfaces";

export interface ICriteriaSlice {
  records: IPeople[];
  loading: boolean;
}

const initialState: ICriteriaSlice = {
  records: [],
  loading: false,
};

export const fetchPeople = createAsyncThunk("users/fetchPeople", async () => {
  const response = await instance.get(`/api/people`);
  return response.data;
});

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.records = action.payload.data;
        state.loading = false;
      })
      .addCase(fetchPeople.rejected, (state, action) => {
        state.records = [];
        state.loading = false;
      })
      .addCase(fetchPeople.pending, (state, action) => {
        state.records = [];
        state.loading = true;
      });
  },
});

export const { setLoading } = peopleSlice.actions;

// Action creators are generated for each case reducer function

export default peopleSlice.reducer;
