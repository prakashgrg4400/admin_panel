import { configureStore } from "@reduxjs/toolkit";
import userSlicer from "./slices/user-slice";

const store = configureStore({
    reducer: {
        user: userSlicer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});
// == > serializable data consisit of string , array , object , number . It means you can only store these datas inside your state . So if you use data which we receive from third parties like Date.now() , than redux will warn us that the data is not serializable. So to avoid this we set the value to false .

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
