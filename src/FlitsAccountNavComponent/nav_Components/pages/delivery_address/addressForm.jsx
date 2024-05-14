import React, { useState } from "react";
import InputFieldReusable from '../../../formReusableComponents/inputField_reusable';
import ContactInputFieldComponent from "../../../formReusableComponents/contactInputFieldComponent";
import FormSelectComponent from "../../../formReusableComponents/formSelectComponent";
import FormButtonComponent from '../../../formReusableComponents/formButtonComponent';

export default function AddressForm(props) {
    const [error,setError]=useState(false);
    const [showProvince,setShowProvince]=useState(false);
    const [addressFormData, setAddressFormData] = useState({
        first_name: '',
        last_name: '',
        add_line1: '',
        add_line2: '',
        company: '',
        postal_code: '',
        contact_number: '',
        country_callingcode: '+91',
        city: '',
        country: '',
        province: ''
    });

    //Function onChange for Input field..
    function handleFormAddressChange(e){
        var name=e?.target.name;
        var value=e?.target.value;
        try {
            var countryInfo = name === 'country_dropdown' && JSON.parse(value);
        setAddressFormData((pre) => {
            return (name === 'country_dropdown' ? { ...pre, country_callingcode: countryInfo?.callingcode } : { ...pre, [name]:value });
        });

        if(name==='country' && value){
            setShowProvince(true);
        }
        else{
            setShowProvince(false);
        }

        } catch (error) {
            console.log(error.message);
        }
    }

    //Function Submit Starts..
    function handleFormAddressSubmit(e){
        e.preventDefault();
        console.log(addressFormData);
    }

    return (
        <>
            <h3>Add New Address</h3>
            <div className="addressFormParentContainer">
                <form onSubmit={handleFormAddressSubmit}>
                    <div className="inputFieldNameContainer">
                        <InputFieldReusable fieldInfo={{ title: 'First Name :', type: 'text',name:'first_name', placeholder: 'First Name', className: 'fNameInputField',onchange:handleFormAddressChange }} />
                        <InputFieldReusable fieldInfo={{ title: 'Last Name :', type: 'text',name:'last_name', placeholder: 'Last Name', className: 'lNameInputField',onchange:handleFormAddressChange }} />
                    </div>
                    <div>
                        <InputFieldReusable fieldInfo={{title:'Address Line 1 :',type:'text',name:'add_line1',placeholder:'Address Line 1', className:'addressLine1InputField',onchange:handleFormAddressChange}} />
                        <InputFieldReusable fieldInfo={{title:'Address Line 2 :',type:'text',name:'add_line2',placeholder:'Address Line 2', className:'addressLine2InputField',onchange:handleFormAddressChange}} />
                    </div>
                    <div className="inputFieldGroupContainer">
                        <InputFieldReusable fieldInfo={{title:'Company :',type:'text',name:'company',placeholder:'Company', className:'companyInputField',onchange:handleFormAddressChange}} />
                        <InputFieldReusable fieldInfo={{title:'Postal/Zip Code :',type:'text',name:'postal_code',placeholder:'Postal/Zip Code', className:'postalInputField',onchange:handleFormAddressChange}} />
                        <ContactInputFieldComponent contact_template={{
                        title: 'Contact Number :',
                        type: ['text','tel'],
                        name: ['country_callingcode','contact_number','country_dropdown'],
                        placeholder:'Contact Number',
                        value: [addressFormData.country_callingcode,addressFormData.contact_number],
                        className:['addFormContact_parent','addFormCountry-selector','addFormCountryDropdown'],
                        onchange:handleFormAddressChange
                    }} setError={setError} />
                    </div>
                    <div className="inputFieldGroupContainer">
                        <InputFieldReusable fieldInfo={{title:'City :',type:'text',name:'city',value:addressFormData.city,placeholder:'City',className:'cityInputField',onchange:handleFormAddressChange}} />
                        <FormSelectComponent fieldInfo={{ title: 'Country :', name: 'country', value:addressFormData.country, className:'countryDropdownField', onchange:handleFormAddressChange }} />
                        {showProvince && <FormSelectComponent fieldInfo={{ title: 'Province :', name: 'province', value:addressFormData.province, optValue: ['female', 'male', 'other'], optText: ['Female', 'Male', 'Other'],className:'stateDropdownField',onchange:handleFormAddressChange }} />}
                    </div>
                    <div className='updateFormBtnStyle'>
                        <FormButtonComponent fieldInfo={{ title: 'Cancle', className: 'formCancelBtn', type: 'button',onclick:()=>{props.setIsViewDelivery(true)} }} />
                        <FormButtonComponent fieldInfo={{ title: 'Save', className: 'formSaveBtn', type: 'Submit', disable: error }} />
                    </div>
                </form>
            </div>
        </>
    )
}