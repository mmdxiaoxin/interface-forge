import { createSlice } from "@reduxjs/toolkit";

interface GlobalState {
    isDark: boolean;
}

const initialState: GlobalState = {
    isDark: false,
};

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.isDark = !state.isDark;
        },
    },
});

export const { toggleDarkMode } = globalSlice.actions;
export default globalSlice.reducer;
