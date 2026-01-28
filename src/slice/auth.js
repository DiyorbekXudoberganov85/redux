import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    isLoading: false,
    loggedIn: false,
    user: null,
}
export const authSlice = createSlice({
    name: 'auth',
    initialState ,
    reducers: {
        loginUserStart: (state) => {
            state.isLoading = true
        },
        loginUserSuccess: (state, action) => {
           
        },
        loginUserFailure: (state) => {
            
        },
        registerStart: (state) => {
            state.isLoading = true
        },
        registerSuccess: (state, action) => {
           
        },
        registerFailure: (state) => {
            
        },
    }

})

export const {loginUserStart ,registerStart } = authSlice.actions
export default authSlice.reducer