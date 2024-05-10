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
            const {id,first_name,last_name,email,contact_number,country_callingcode,birthdate,gender}=action.payload;
            state.userdata={id,first_name,last_name,email,contact_number,country_callingcode,birthdate,gender}
        },
        isModify:(state,action)=>{
            state.isModified=action.payload;
        }
    }
});

export const {userinfo,isModify}=userSlice.actions;
export default userSlice.reducer;