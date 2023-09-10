import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    "path": "/AssetIncrease/user",
}


const slice = createSlice({
    name: "path",
    initialState,
    reducers:{
        path:(state, action) => {
            state.path = action.payload.path
        }
    }
})



export const { path } = slice.actions;

export default slice.reducer;