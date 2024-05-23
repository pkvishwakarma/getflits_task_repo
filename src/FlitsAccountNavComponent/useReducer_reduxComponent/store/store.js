import { configureStore } from "@reduxjs/toolkit";
import userReducer,{userinfo,isModify} from './features/userInfoSlicer/userinfoSlice';
import deliveryAddReducer,{addDeliveryAdd,isAddressAdded,updateDeliveryAdd,deleteDeliveryAdd,isDefaultAdd} from "./features/deliveryAddDataSlicer/deliveryAddSlice";

export const store =configureStore({
    reducer:{
        initialUserData:userReducer,
        deliveryData:deliveryAddReducer
    }
});
// console.log(store.getState())

export {userinfo,isModify,addDeliveryAdd,isAddressAdded,updateDeliveryAdd,deleteDeliveryAdd,isDefaultAdd};