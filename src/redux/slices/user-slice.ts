import { createSlice } from "@reduxjs/toolkit";
import { getToken, getUserData } from "../../utils/auth-storage";
import { setUserLogin } from "../../utils/auth-storage";

export interface IUser {
    id: number;
    createdAt: string;
    updatedAt: string;
    name: string;
    isVerified: boolean;
    isOwnerOfCompany: boolean;
    isSuperAdmin: boolean;
    email: string;
    company: {
        name?: string;
        createdAt?: string;
        updatedAt?: string;
        logo?: string | null;
        acceptedAt?: string | null;
    };
    roles?: [
        {
            id?: string;
            role: string;
        }
    ];
    userData?: {
        email?: string;
    };
}

interface IUserState {
    accessToken: string | null;
    user: IUser | null;
    loginStatus: boolean;
}
const initialState: IUserState = {
    accessToken: getToken(),
    user: getUserData(),
    loginStatus: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLogin(state, action) {
            console.log(state);
            console.log(action.payload);
            setUserLogin({ ...action.payload });
            state.accessToken = action.payload.token;
            state.user = action.payload.userData;
            state.loginStatus = true;
        },
    },
});

export const { setLogin } = userSlice.actions;

export default userSlice.reducer;
