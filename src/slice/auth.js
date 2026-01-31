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
        signUserStart: (state) => {
            state.isLoading = true
        },
        signUserSuccess: (state, action) => {
           state.loggedIn = true 
           state.isLoading = false 
           state.user = action.payload
        },  
        signUserFailure: (state , action) => {
            state.isLoading = false
            state.error = action.payload
        }
        // loginUserStart: (state) => {
        //     state.isLoading = true
        // },
        // loginUserSuccess: (state) => {
        //    state.loggedIn = true 
        //    state.isLoading = false 
        // },
        // loginUserFailure: (state) => {
        //     state.isLoading = false
        //     state.error = "error"
        // },
        // registerStart: (state) => {
        //     state.isLoading = true
        // },
        // registerSuccess: (state) => {
        //    state.loggedIn = true 
        //    state.isLoading = false 
        // },"username":"Diyorbek21"
        // registerFailure: (state) => {
        //     state.isLoading = false
        //     state.error = "error"

            
        // },
    }

})

export const {signUserStart, signUserSuccess, signUserFailure} = authSlice.actions
export default authSlice.reducer