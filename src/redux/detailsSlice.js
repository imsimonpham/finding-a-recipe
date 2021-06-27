import { createSlice } from "@reduxjs/toolkit";

const detailsSlice = createSlice({
  name: "details",
  initialState: {
    id: 0,
  },
  reducers: {
    getId: (state, action) => {
      const { retrievedId } = action.payload;
      state.id = retrievedId;
    },
  },
});

export const { getId } = detailsSlice.actions;

export default detailsSlice.reducer;
