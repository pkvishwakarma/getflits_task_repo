import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userdata:{...JSON.parse(localStorage.getItem('userdata'))},
    isModified:false
}

export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        userinfo:(state,action)=>{
            state.userdata={...action.payload};
        },
        isModify:(state,action)=>{
            state.isModified=action.payload;
        }
    }
});

export const {userinfo,isModify}=userSlice.actions;
export default userSlice.reducer;