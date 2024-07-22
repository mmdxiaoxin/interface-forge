import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import globalReducer from "./slices/globalSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        global: globalReducer,
        user: userSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
