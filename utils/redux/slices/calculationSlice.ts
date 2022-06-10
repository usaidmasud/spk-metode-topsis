import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import instance from "../../../config/instance";
import {
  ICriteria,
  IDatum,
  IGetJarak,
  IGetNiliaiPreferensi,
  IGetNormalisasiY
} from "../../interfaces";

export interface ICriteriaSlice {
  loading: boolean;
  data: IDatum[];
  criteria: ICriteria[];
  pembagi: number[];
  normalisasiR: IGetNormalisasiY[];
  getNormalisasiY: IGetNormalisasiY[];
  getSolusiIdealPositif: number[];
  getSolusiIdealNegatif: number[];
  getJarak: IGetJarak[];
  getNiliaiPreferensi: IGetNiliaiPreferensi[];
}

const initialState: ICriteriaSlice = {
  loading: false,
  data: [],
  criteria: [],
  pembagi: [],
  normalisasiR: [],
  getNormalisasiY: [],
  getSolusiIdealPositif: [],
  getSolusiIdealNegatif: [],
  getJarak: [],
  getNiliaiPreferensi: [],
};

export const fetchCalculation = createAsyncThunk(
  "topsis/fetchCalculation",
  async () => {
    const response = await instance.get(`/topsis/topsis`);
    return response.data;
  }
);

export const calculationSlice = createSlice({
  name: "calculation",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCalculation.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.criteria = action.payload.criteria;
        state.pembagi = action.payload.pembagi;
        state.normalisasiR = action.payload.normalisasiR;
        state.getNormalisasiY = action.payload.getNormalisasiY;
        state.getSolusiIdealPositif = action.payload.getSolusiIdealPositif;
        state.getSolusiIdealNegatif = action.payload.getSolusiIdealNegatif;
        state.getJarak = action.payload.getJarak;
        state.getNiliaiPreferensi = action.payload.getNiliaiPreferensi;
        state.loading = false;
      })
      .addCase(fetchCalculation.rejected, (state, action) => {
        state.data = [];
        state.criteria = [];
        state.pembagi = [];
        state.normalisasiR = [];
        state.getNormalisasiY = [];
        state.getSolusiIdealPositif = [];
        state.getSolusiIdealNegatif = [];
        state.getJarak = [];
        state.getNiliaiPreferensi = [];
        state.loading = false;
      })
      .addCase(fetchCalculation.pending, (state, action) => {
        state.data = [];
        state.criteria = [];
        state.pembagi = [];
        state.normalisasiR = [];
        state.getNormalisasiY = [];
        state.getSolusiIdealPositif = [];
        state.getSolusiIdealNegatif = [];
        state.getJarak = [];
        state.getNiliaiPreferensi = [];
        state.loading = true;
      });
  },
});

export const { setLoading } = calculationSlice.actions;

// Action creators are generated for each case reducer function

export default calculationSlice.reducer;
