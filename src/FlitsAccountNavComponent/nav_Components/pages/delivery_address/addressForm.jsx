import React, { useState } from "react";
import InputFieldReusable from '../../../formReusableComponents/inputField_reusable';
import ContactInputFieldComponent from "../../../formReusableComponents/contactInputFieldComponent";
import FormSelectComponent from "../../../formReusableComponents/formSelectComponent";
import FormButtonComponent from '../../../formReusableComponents/formButtonComponent';
import { useDispatch } from "react-redux";
import {addDeliveryAdd,isAddressAdded} from '../../../useReducer_reduxComponent/store/store';
import Slide from '@mui/material/Slide';
import SnackbarReusableComponent from "../../../formReusableComponents/snackbarResuableComponent";

export default function AddressForm(props) {
    const [error, setError] = useState(false);
    const [showProvince, setShowProvince] = useState(false);
    const [addressFormData, setAddressFormData] = useState({
        id:Date.now(toString()),
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
    var dispatch=useDispatch();
    const [snackbarState, setSnackbarState] = useState({
        open: false,
        Transition: Slide,
    });


    //Function onChange for Input field..
    function handleFormAddressChange(e) {
        var name = e?.target.name;
        var value = e?.target.value;
        try {
            var countryInfo = name === 'country_dropdown' && JSON.parse(value);
            setAddressFormData((pre) => {
                return (name === 'country_dropdown' ? { ...pre, country_callingcode: countryInfo?.callingcode } : { ...pre, [name]: value });
            });

            if (name === 'country' && value) {
                setShowProvince(true);
            }
            else if (name === 'province') {
                setShowProvince(true);
            }
            else {
                setShowProvince(false);
            }

        } catch (error) {
            console.log(error.message);
        }
    }

    //Function Submit Starts..
    function handleFormAddressSubmit(e) {
        e.preventDefault();
        localStorage.setItem('deliveryAdd',JSON.stringify(addressFormData));
        dispatch(addDeliveryAdd(JSON.parse(localStorage.getItem('deliveryAdd'))));
        setSnackbarState((pre)=>{return{...pre,open:true}});
        setTimeout(()=>{
            props.setIsViewDelivery(true);
        },1500);
        dispatch(isAddressAdded(true));
    }
    //Submit function Ends..
    return (
        <>
            <h3>Add New Address</h3>
            <div className="addressFormParentContainer">
                <form onSubmit={handleFormAddressSubmit}>
                    <div className="inputFieldNameContainer">
                        <InputFieldReusable fieldInfo={{ title: 'First Name :', type: 'text', name: 'first_name', placeholder: 'First Name', className: 'fNameInputField', onchange: handleFormAddressChange }} />
                        <InputFieldReusable fieldInfo={{ title: 'Last Name :', type: 'text', name: 'last_name', placeholder: 'Last Name', className: 'lNameInputField', onchange: handleFormAddressChange }} />
                    </div>
                    <div>
                        <InputFieldReusable fieldInfo={{ title: 'Address Line 1 :', type: 'text', name: 'add_line1', placeholder: 'Address Line 1', className: 'addressLine1InputField', onchange: handleFormAddressChange }} />
                        <InputFieldReusable fieldInfo={{ title: 'Address Line 2 :', type: 'text', name: 'add_line2', placeholder: 'Address Line 2', className: 'addressLine2InputField', onchange: handleFormAddressChange }} />
                    </div>
                    <div className="inputFieldGroupContainer">
                        <InputFieldReusable fieldInfo={{ title: 'Company :', type: 'text', name: 'company', placeholder: 'Company', className: 'companyInputField', onchange: handleFormAddressChange }} />
                        <InputFieldReusable fieldInfo={{ title: 'Postal/Zip Code :', type: 'text', name: 'postal_code', placeholder: 'Postal/Zip Code', className: 'postalInputField', onchange: handleFormAddressChange }} />
                        <ContactInputFieldComponent contact_template={{
                            title: 'Contact Number :',
                            type: ['text', 'tel'],
                            name: ['country_callingcode', 'contact_number', 'country_dropdown'],
                            placeholder: 'Contact Number',
                            value: [addressFormData.country_callingcode, addressFormData.contact_number],
                            className: ['addFormContact_parent', 'addFormCountry-selector', 'addFormCountryDropdown'],
                            onchange: handleFormAddressChange
                        }} setError={setError} />
                    </div>
                    <div className="inputFieldGroupContainer">
                        <InputFieldReusable fieldInfo={{ title: 'City :', type: 'text', name: 'city', value: addressFormData.city, placeholder: 'City', className: 'cityInputField', onchange: handleFormAddressChange }} />
                        <FormSelectComponent fieldInfo={{ title: 'Country :', name: 'country', value: addressFormData.country, className: 'countryDropdownField', onchange: handleFormAddressChange }} />
                        {showProvince && <FormSelectComponent fieldInfo={{ title: 'Province :', name: 'province', value: addressFormData.province, optValue: ['new delhi', 'mumbai', 'pune', 'goa', 'madhya pradesh', 'uttar pradesh', 'bihar', 'jharkhand', 'chattisgarh', 'gujrat'], optText: ['New Delhi', 'Mumbai', 'Pune', 'Goa', 'Madhya Pradesh', 'Uttar Pradesh', 'Bihar', 'Jharkhand', 'Chattisgarh', 'Gujrat'], className: 'stateDropdownField', onchange: handleFormAddressChange }} />}
                    </div>
                    <div className='delivertAddFormBtnStyle'>
                        <FormButtonComponent fieldInfo={{ title: 'Cancle', className: 'formCancelBtn', type: 'button', onclick: () => { props.setIsViewDelivery(true);dispatch(isAddressAdded(false)) } }} />
                        <FormButtonComponent fieldInfo={{ title: 'Save', className: 'formSaveBtn', type: 'Submit', disable: error }} />
                    </div>
                </form>
                <div>
                    <SnackbarReusableComponent snackbarInfo={{ style: 'black', message: 'Adding New Address..' }} snackbarState={snackbarState} />
                </div>
            </div>
        </>
    )
}