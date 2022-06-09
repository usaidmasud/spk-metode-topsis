import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import instance from "../../../config/instance";
import { IProject } from "../../interfaces";

export interface IProjectSlice {
  records: IProject[];
  loading: boolean;
}

const initialState: IProjectSlice = {
  records: [],
  loading: false,
};

export const fetchProject = createAsyncThunk("topsis/fetchProject", async () => {
  const response = await instance.get(`/topsis/project`);
  return response.data;
});

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProject.fulfilled, (state, action) => {
        state.records = action.payload.data;
        state.loading = false;
      })
      .addCase(fetchProject.rejected, (state, action) => {
        state.records = [];
        state.loading = false;
      })
      .addCase(fetchProject.pending, (state, action) => {
        state.records = [];
        state.loading = true;
      });
  },
});

export const { setLoading } = projectSlice.actions;

// Action creators are generated for each case reducer function

export default projectSlice.reducer;
