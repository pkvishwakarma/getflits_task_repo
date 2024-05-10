import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userdata:{...JSON.parse(localStorage.getItem('userdata'))}
}

export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        userinfo:(state,action)=>{
            const {id,first_name,last_name,email,contact_number,country_callingcode,birthdate,gender}=action.payload;
            state.userdata={id,first_name,last_name,email,contact_number,country_callingcode,birthdate,gender}
        }
    }
});

export const {userinfo}=userSlice.actions;
export default userSlice.reducer;