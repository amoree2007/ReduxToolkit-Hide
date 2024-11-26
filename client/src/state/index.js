import { configureStore } from "@reduxjs/toolkit";
import posts from "./postSilce";
import auth from "./authSilce";

const store = configureStore({
  reducer: { posts, auth },
});

export default store;
