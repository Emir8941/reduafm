import { createSlice } from "@reduxjs/toolkit"

const initialiState = {
    userName: null,
    userEmail: null
}

const userSlice = createSlice({
    name: 'user',
    initialiState,
    reducers: {
        setActiveUser: (state, action) => {
            state.userName = action.payload.userName
            state.userEmail = action.payload.userEmail
        },
        setUserLongoutState: state => {
            state.userName = null
            state.userEmail = null
        }
    }
})


export const {setActiveUser, setUserLongoutState} = userSlice.actions 
export const selectUserName = state => state.userName
export const selectUserEmail = state => state.userEmail

export default userSlice.reducer