import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../models";
import { clearLocalStorage, persisLocalStorage } from "../../utilities";

export const EmptyUserState: UserInfo = {
    id: 0,
    name: '',
    email: ''
}

const UserKey = 'user';

export const userSilce = createSlice({
    name: 'user',
    initialState: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : EmptyUserState,
    reducers: {
        createUser: (state, action) => {
            persisLocalStorage<UserInfo>(UserKey, action.payload)
            return action.payload;
        },
        updateUser: (state, action) => {
            const result = { ...state, ...action.payload }
            persisLocalStorage<UserInfo>(UserKey, result)
            return result;
        },
        resetUser: (state, action) => {
            clearLocalStorage(UserKey)
            return EmptyUserState;
        },
    }
})

export const { createUser, updateUser, resetUser } = userSilce.actions
export default userSilce.reducer        // cuando lo importamos como default si no colocamos los corchetes al importaer estamos importando esto