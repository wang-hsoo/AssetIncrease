import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    "auth": {
        "name": null,
        "createdate": null,
        "auth" : null
    },
    "info":{
            "name": null,
            "started_at": null,
            "start_price": null,
            "targetPer": null
    }
}


const slice = createSlice({
    name: "user",
    initialState,
    reducers:{
        auth:(state, action) => {
            state.auth = action.payload.auth
        },
        info:(state, action) => {
            state.info = action.payload.info
        }
    }
})



export const { auth, info } = slice.actions;

export default slice.reducer;