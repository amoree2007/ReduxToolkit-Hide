import { createSlice } from "@reduxjs/toolkit";

const authSilce = createSlice({
  name: "auth",
  initialState: { id: 1, isLoggedUn: true },
  reducers: {},
});

export default authSilce.reducer;
