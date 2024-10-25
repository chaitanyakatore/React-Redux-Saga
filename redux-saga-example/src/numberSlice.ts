import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NumberState {
  value: number;
  loading: boolean;
}

const initialState: NumberState = {
  value: 0,
  loading: false,
};

const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    fetchNumberRequest: (state) => {
      state.loading = true;
    },
    fetchNumberSuccess: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchNumberRequest, fetchNumberSuccess } = numberSlice.actions;
export default numberSlice.reducer;
