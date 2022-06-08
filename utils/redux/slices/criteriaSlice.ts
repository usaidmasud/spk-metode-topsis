import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import instance from "../../../config/instance";
import { ICriteria } from "../../interfaces";

export interface ICriteriaSlice {
  records: ICriteria[];
  loading: boolean;
}

const initialState: ICriteriaSlice = {
  records: [],
  loading: false,
};

export const fetchCriteria = createAsyncThunk(
  "users/fetchCriteria",
  async () => {
    const response = await instance.get(`/topsis/criteria`);
    return response.data;
  }
);

export const criteriaSlice = createSlice({
  name: "criteria",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCriteria.fulfilled, (state, action) => {
        state.records = action.payload.data;
        state.loading = false;
      })
      .addCase(fetchCriteria.rejected, (state, action) => {
        state.records = [];
        state.loading = false;
      })
      .addCase(fetchCriteria.pending, (state, action) => {
        state.records = [];
        state.loading = true;
      });
  },
});

export const { setLoading } = criteriaSlice.actions;

// Action creators are generated for each case reducer function

export default criteriaSlice.reducer;
