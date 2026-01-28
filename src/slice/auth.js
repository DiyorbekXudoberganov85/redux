import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    isLoading: false,
    loggedIn: false,
    error:null,
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
        registerSuccess: (state) => {
           state.loggedIn = true 
           state.isLoading = false 
        },
        registerFailure: (state) => {
            state.isLoading = false
            state.error = "error"

            
        },
    }

})

export const {loginUserStart ,registerStart , registerSuccess , registerFailure} = authSlice.actions
export default authSlice.reducer