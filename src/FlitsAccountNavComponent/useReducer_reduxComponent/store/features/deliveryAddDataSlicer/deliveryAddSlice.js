import { createSlice } from "@reduxjs/toolkit";

const initialState={
    deliveryAddCollection:[JSON.parse(localStorage.getItem('deliveryAdd'))],
    isAddress:false
}

export const deliveryAddSlice=createSlice({
    name:"delivery",
    initialState,
    reducers:{
        //deliveryAddCollection Initial State Reducers starts..
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
            state.deliveryAddCollection=[action.payload];
        },
        
        updateDeliveryAdd:(state,action)=>{
            // console.log(action.payload.id);
            // console.log(state.deliveryAddCollection);
            var editedIndex=state.deliveryAddCollection[0]?.findIndex((index)=>index.id===action.payload.id);
            if(editedIndex!==-1){
                state.deliveryAddCollection[0][editedIndex]={...action.payload};
            }
        },

        deleteDeliveryAdd:(state,action)=>{
            state.deliveryAddCollection[0]=state.deliveryAddCollection[0]?.filter((add)=>add.id!==action.payload);
        },
        //deliveryAddCollection Initial State Reducers Ends..

        //isAddress Initial State Reducer Start..
        isAddressAdded:(state,action)=>{
            state.isAddress=action.payload;
        },
        //isAddress Initial State Reducer Ends..
    }
});

export const {addDeliveryAdd,isAddressAdded,updateDeliveryAdd,deleteDeliveryAdd}=deliveryAddSlice.actions;
export default deliveryAddSlice.reducer;