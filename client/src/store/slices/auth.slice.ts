import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types";

const initialState = {
    user: {} as IUser | null,
    auth: false,
};

const authSlice = createSlice({
    initialState,
    name: "auth",
    reducers: {
        setUser: (state, action: PayloadAction<{ user: IUser | null }>) => {
            state.user = action.payload?.user;
            state.auth = true;
        },
        removeUser: (state) => {
            state.user = null;
            state.auth = false;
        },
    },
});

export const { removeUser, setUser } = authSlice.actions;
export default authSlice.reducer;
