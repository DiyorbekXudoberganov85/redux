import {createSlice} from '@reduxjs/toolkit'
 const initialState = {
    isLoading: false,
    articles: [],
    error:null,
}

export const articleSlice = createSlice({

    name: 'articles',
    initialState,
    reducers: {
        getArticlesStart: (state) => {
            state.isLoading = true
        },
        getArticlesSuccess: (state, action) => {
           state.isLoading = false 
           state.articles = action.payload
        },
        gitArticlesFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
        
    }


})



export const {getArticlesStart, getArticlesSuccess}  = articleSlice.actions
export default articleSlice.reducer
