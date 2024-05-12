import React, { useState } from 'react';
import ViewDeliveryAdd from './viewDeliveryAdd';
import AddressForm from './addressForm';

export default function DeliveryAdd(){
    const [isViewDelivery,setIsViewDelivery]=useState(true);
    return(
        <>
            <div>
                {
                    isViewDelivery?<ViewDeliveryAdd setIsViewDelivery={setIsViewDelivery} />
                    :
                    <AddressForm />
                }
            </div>
        </>
    )
}