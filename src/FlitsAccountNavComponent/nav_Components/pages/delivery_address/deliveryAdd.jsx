import React, { useState } from 'react';
import ViewDeliveryAdd from './viewDeliveryAdd';
import AddressForm from './addressForm';

export default function DeliveryAdd(){
    const [isViewDelivery,setIsViewDelivery]=useState(true);
    const [isAddNewAddress,setIsAddNewAddress]=useState(true);
    const [editDeliveryAddressId,setEditDeliveryAddressId]=useState(0);
    return(
        <>
            <div>
                {
                    isViewDelivery?
                    <ViewDeliveryAdd setIsViewDelivery={setIsViewDelivery} setIsAddNewAddress={setIsAddNewAddress} setEditDeliveryAddressId={setEditDeliveryAddressId} />
                    : isAddNewAddress?
                    <AddressForm title='Add New Address' setIsViewDelivery={setIsViewDelivery} isAddNewAddress={isAddNewAddress} />
                    :
                    <AddressForm title='Edit Address' setIsViewDelivery={setIsViewDelivery} isAddNewAddress={isAddNewAddress} editDeliveryAddressId={editDeliveryAddressId} />
                    
                }
            </div>
        </>
    )
}