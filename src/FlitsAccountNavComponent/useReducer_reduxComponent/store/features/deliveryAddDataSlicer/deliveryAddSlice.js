import { createSlice } from "@reduxjs/toolkit";

const initialState={
    deliveryAddCollection:[JSON.parse(localStorage.getItem('deliveryAdd'))],
    isAddress:false
}

export const deliveryAddSlice=createSlice({
    name:"delivery",
    initialState,
    reducers:{
        addDeliveryAdd:(state,action)=>{
            // console.log(action.payload);
            // const deliveryAddress={
            //     first_name:action.payload.first_name,
            //     last_name:action.payload.last_name,
            //     add_line1:action.payload.add_line1,
            //     add_line2:action.payload.add_line2,
            //     company:action.payload.company,
            //     postal_code:action.payload.postal_code,
            //     country_callingcode:action.payload.country_callingcode,
            //     contact_number:action.payload.contact_number,
            //     city:action.payload.city,
            //     country:action.payload.country,
            //     province:action.payload.province
            // }
            // state.deliveryAddCollection.push(deliveryAddress);
            state.deliveryAddCollection=[action.payload]
        },

        updateDeliveryAdd:(state,action)=>{
            console.log(action.payload);
        },

        isAddressAdded:(state,action)=>{
            state.isAddress=action.payload;
        }
    }
});

export const {addDeliveryAdd,isAddressAdded,updateDeliveryAdd}=deliveryAddSlice.actions;
export default deliveryAddSlice.reducer;