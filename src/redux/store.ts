import { configureStore } from "@reduxjs/toolkit";
import userSlicer from "./slices/user-slice";

const store = configureStore({
    reducer: {
        user: userSlicer,
    },
});

export default store;
