import React from "react";
import InputFieldReusable from '../../../formReusableComponents/inputField_reusable';
import ContactInputFieldComponent from "../../../formReusableComponents/contactInputFieldComponent";

export default function AddressForm() {
    return (
        <>
            <h3>Add New Address</h3>
            <div className="addressFormParentContainer">
                <form>
                    <div className="inputFieldNameContainer">
                        <InputFieldReusable fieldInfo={{ title: 'First Name :', type: 'text', placeholder: 'First Name', className: 'fNameInputField' }} />
                        <InputFieldReusable fieldInfo={{ title: 'Last Name :', type: 'text', placeholder: 'Last Name', className: 'lNameInputField' }} />
                    </div>
                    <div>
                        <InputFieldReusable fieldInfo={{title:'Address Line 1 :',type:'text',placeholder:'Address Line 1', className:'addressLine1InputField'}} />
                        <InputFieldReusable fieldInfo={{title:'Address Line 2 :',type:'text',placeholder:'Address Line 2', className:'addressLine2InputField'}} />
                    </div>
                    <div className="inputFieldGroupContainer">
                        <InputFieldReusable fieldInfo={{title:'Company :',type:'text',placeholder:'Company', className:'companyInputField'}} />
                        <InputFieldReusable fieldInfo={{title:'Postal/Zip Code :',type:'',placeholder:'Postal/Zip Code', className:'postalInputField'}} />
                        <ContactInputFieldComponent contact_template={{
                        title: 'Contact Number :',
                        type: ['text','tel'],
                        name: ['country_callingcode','contact_number','country_dropdown'],
                        placeholder:'Contact Number',
                        value: ['',''],
                        className:['addFormContact_parent','addFormCountry-selector','addFormCountryDropdown']
                    }} />
                    </div>
                </form>
            </div>
        </>
    )
}