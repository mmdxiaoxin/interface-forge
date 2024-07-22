import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    token: string;
    loading: boolean;
}

const initialState: UserState = {
    token: "",
    loading: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
});

export const { setToken, setLoading } = userSlice.actions;
export default userSlice.reducer;
