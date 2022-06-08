import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import instance from "../../../config/instance";
import { IAlternatif } from "../../interfaces";

export interface ICriteriaSlice {
  records: IAlternatif[];
  loading: boolean;
}

const initialState: ICriteriaSlice = {
  records: [],
  loading: false,
};

export const fetchAlternatif = createAsyncThunk("users/fetchAlternatif", async () => {
  const response = await instance.get(`/topsis/alternatif`);
  return response.data;
});

export const alternatifSclice = createSlice({
  name: "alternatif",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlternatif.fulfilled, (state, action) => {
        state.records = action.payload.data;
        state.loading = false;
      })
      .addCase(fetchAlternatif.rejected, (state, action) => {
        state.records = [];
        state.loading = false;
      })
      .addCase(fetchAlternatif.pending, (state, action) => {
        state.records = [];
        state.loading = true;
      });
  },
});

export const { setLoading } = alternatifSclice.actions;

// Action creators are generated for each case reducer function

export default alternatifSclice.reducer;
