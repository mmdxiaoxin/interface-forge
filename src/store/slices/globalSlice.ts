import { createSlice } from "@reduxjs/toolkit";

interface GlobalState {
    isDark: boolean;
    isCollapse: boolean;
}

const initialState: GlobalState = {
    isDark: false,
    isCollapse: false,
};

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.isDark = !state.isDark;
        },
        toggleCollapse(state) {
            state.isCollapse = !state.isCollapse;
        },
    },
});

export const { toggleDarkMode, toggleCollapse } = globalSlice.actions;
export default globalSlice.reducer;
