import { createSlice } from "@reduxjs/toolkit";

interface OverlayState {
  isOpen: boolean;
}

const initialState: OverlayState = {
  isOpen: false,
};

const isOpenCloseSlice = createSlice({
  name: "isOpenClose",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggle } = isOpenCloseSlice.actions;
export default isOpenCloseSlice.reducer;
