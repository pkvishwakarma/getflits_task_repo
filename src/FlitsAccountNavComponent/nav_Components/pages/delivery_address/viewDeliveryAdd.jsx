import React from "react";
import './deliveryAdd.css';
import FormButtonComponent from '../../../formReusableComponents/formButtonComponent';

export default function ViewDeliveryAdd(props) {
    var {setIsViewDelivery}=props;
    return (
        <>
            <div>
                <div>
                    <FormButtonComponent fieldInfo={{title:<><img src="./images/icons/plus-circle.svg" alt="plus-icon" className="addPlusIcon" />
                    <p className='addNewAddressBtn'>Add New Address</p></>, className:'addNewAddBtnParentContainer',type:'button',onclick:()=>{setIsViewDelivery(false)}}} />
                </div>
            </div>
        </>
    )
}