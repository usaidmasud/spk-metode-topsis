import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ICriteria } from "../../interfaces";

export interface ICriteriaSlice {
  records: ICriteria[];
  loading: boolean;
}

const initialState: ICriteriaSlice = {
  records: [],
  loading:false
};

export const fetchData = createAsyncThunk("users/fetchData", async () => {
  const response = await axios.get(`${process.env.API_URL}/api/people`);
  return response.data;
});

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    setLoading : (state, action : PayloadAction<boolean>) => {
      state.loading = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.records = action.payload;
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.records = [];
        state.loading = false;
      })
      .addCase(fetchData.pending, (state, action) => {
        state.records = [];
        state.loading = true;
      });
  },
});

export const { setLoading } = peopleSlice.actions

// Action creators are generated for each case reducer function

export default peopleSlice.reducer;
