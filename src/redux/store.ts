import { configureStore } from "@reduxjs/toolkit";
import { UserInfo } from "../models"
import userSilceReducer from "./states/user";   // utilizando el export default

export interface AppStore {
    user: UserInfo;
}

export default configureStore<AppStore>({
    reducer: {
        user: userSilceReducer
    }
});