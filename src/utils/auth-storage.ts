// import { IUser } from "@/redux/slices/user-slice";

import { IUser } from "../redux/slices/user-slice";

const TOKEN_KEY = "token";
const USER_DATA_KEY = "user";

interface ILogin {
    token: string;
    userData: IUser;
    isRememberMe?: boolean;
}

export function getToken() {
    const localToken = localStorage.getItem(TOKEN_KEY);
    const sessionToken = sessionStorage.getItem(TOKEN_KEY);
    if (localToken) {
        return localToken;
    } else if (sessionToken) {
        return sessionToken;
    }

    return null;
}

export function setUserLogin(prop: ILogin) {
    const { token, userData, isRememberMe } = prop;
    if (isRememberMe) {
        localStorage.setItem(TOKEN_KEY, token);
        localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
        return;
    }

    sessionStorage.setItem(TOKEN_KEY, token);
    sessionStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
}

export function getUserData() {
    const localData = localStorage.getItem(USER_DATA_KEY);
    const sessionData = sessionStorage.getItem(USER_DATA_KEY);

    if (localData) {
        return JSON.parse(localData);
    } else if (sessionData) {
        return JSON.parse(sessionData);
    }

    return null;
}

export function isUserLogin() {
    const localToken = localStorage.getItem(TOKEN_KEY);
    const sessionToken = sessionStorage.getItem(TOKEN_KEY);
    const userData = getUserData();
    if (localToken || sessionToken || userData) {
        return true;
    }
    return false;
}
