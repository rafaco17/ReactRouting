import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../models";

export const EmptyUserState: UserInfo = {
    id: 0,
    name: '',
    email: ''
}

export const userSilce = createSlice({
    name: 'user',
    initialState: EmptyUserState,
    reducers: {
        createUser: (state, action) => {
            return action.payload;
        },
        updateUser: (state, action) => {
            return { ...state, ...action.payload };
        },
        resetUser: (state, action) => {
            return EmptyUserState;
        },
    }
})

export const { createUser, updateUser, resetUser } = userSilce.actions
export default userSilce.reducer        // cuando lo importamos como default si no colocamos los corchetes al importaer estamos importando esto