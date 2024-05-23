import React, { useEffect, useState } from "react";
import InputFieldReusable from '../../../formReusableComponents/inputField_reusable';
import ContactInputFieldComponent from "../../../formReusableComponents/contactInputFieldComponent";
import FormSelectComponent from "../../../formReusableComponents/formSelectComponent";
import FormButtonComponent from '../../../formReusableComponents/formButtonComponent';
import { useDispatch, useSelector } from "react-redux";
import { addDeliveryAdd, isAddressAdded, updateDeliveryAdd, isDefaultAdd } from '../../../useReducer_reduxComponent/store/store';
import Slide from '@mui/material/Slide';
import SnackbarReusableComponent from "../../../formReusableComponents/snackbarResuableComponent";

//Fetch data from Local storage and updating the deliveryList State to manage all previous address and new Added Address in Global State..
function FetchDeliveryDataFromLocalStorage() {
    var list = localStorage.getItem('deliveryAdd');
    if (list) {
        return JSON.parse(localStorage.getItem('deliveryAdd'));
    }
    else {
        return [];
    }
}

//AddressForm Component Starts..
export default function AddressForm(props) {
    const [error, setError] = useState(false);
    const [showProvince, setShowProvince] = useState(false);
    const [addressFormData, setAddressFormData] = useState({
        id: Date.now(toString()),
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
        province: '',
        isdefault_add: false
    });
    const [deliverList, setDeliveryList] = useState(FetchDeliveryDataFromLocalStorage());
    var defaultAddress = useSelector((state) => state.deliveryData.defaultAddress);
    var dispatch = useDispatch();
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
                return (name === 'country_dropdown' ? { ...pre, country_callingcode: countryInfo?.callingcode } : name === 'default_address' ? { ...pre, isdefault_add: e.target.checked } : { ...pre, [name]: value });
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

    //Function delivery Address Form Submit Starts..
    function handleFormAddressSubmit(e) {
        e.preventDefault();
        var editedDataIndex = deliverList?.findIndex((data) => data.id === props.editDeliveryAddressId);
        var copyDeliveryList = [...deliverList];
        if (editedDataIndex !== -1 || ((defaultAddress?.id === props?.editDeliveryAddressId) && (defaultAddress?.id) !== undefined && (props.editDeliveryAddressId) !== undefined)) {
            if (addressFormData.isdefault_add) {
                if (Object.keys(defaultAddress).length !== 0) {
                    copyDeliveryList[editedDataIndex] = { ...defaultAddress, isdefault_add: false };
                    setDeliveryList([...copyDeliveryList]);
                    localStorage.setItem('defaultAdd', JSON.stringify(addressFormData));
                    dispatch(isDefaultAdd(JSON.parse(localStorage.getItem('defaultAdd'))));
                    setSnackbarState((pre) => { return { ...pre, open: true } });
                    setTimeout(() => {
                        props.setIsViewDelivery(true);
                    }, 1500);
                    dispatch(isAddressAdded(true));
                    // console.log('Update address mode');
                }
                else {
                    localStorage.setItem('defaultAdd', JSON.stringify(addressFormData));
                    dispatch(isDefaultAdd(JSON.parse(localStorage.getItem('defaultAdd'))));
                    copyDeliveryList[editedDataIndex] = ([])
                    setDeliveryList([]);
                    localStorage.setItem('deliveryAdd', JSON.stringify(deliverList));
                    dispatch(updateDeliveryAdd(deliverList));
                    setSnackbarState((pre) => { return { ...pre, open: true } });
                    setTimeout(() => {
                        props.setIsViewDelivery(true);
                    }, 1500);
                    dispatch(isAddressAdded(true));
                    // console.log('Update address mode');
                }
            }
            else {
                copyDeliveryList[editedDataIndex] = { ...addressFormData };
                setDeliveryList([...copyDeliveryList]);
                setSnackbarState((pre) => { return { ...pre, open: true } });
                setTimeout(() => {
                    props.setIsViewDelivery(true);
                }, 1500);
                dispatch(isAddressAdded(true));
                // console.log('Update address mode');
            }
        }
        else {
            if (addressFormData.isdefault_add) {
                if (Object.keys(defaultAddress).length !== 0) {
                    setDeliveryList([...deliverList, { ...defaultAddress, isdefault_add: false }]);
                    localStorage.setItem('defaultAdd', JSON.stringify(addressFormData));
                    dispatch(isDefaultAdd(JSON.parse(localStorage.getItem('defaultAdd'))));
                    setSnackbarState((pre) => { return { ...pre, open: true } });
                    setTimeout(() => {
                        props.setIsViewDelivery(true);
                    }, 1500);
                    dispatch(isAddressAdded(true));
                    // console.log('add new address mode');
                }
                else {
                    localStorage.setItem('defaultAdd', JSON.stringify(addressFormData));
                    dispatch(isDefaultAdd(JSON.parse(localStorage.getItem('defaultAdd'))));
                    setSnackbarState((pre) => { return { ...pre, open: true } });
                    setTimeout(() => {
                        props.setIsViewDelivery(true);
                    }, 1500);
                    dispatch(isAddressAdded(true));
                    // console.log('add new address mode');
                }
            }
            else {
                setDeliveryList([...deliverList, addressFormData]);
                setSnackbarState((pre) => { return { ...pre, open: true } });
                setTimeout(() => {
                    props.setIsViewDelivery(true);
                }, 1500);
                dispatch(isAddressAdded(true));
                // console.log('add new address mode');
            }
        }
    }
    //Submit function Ends..

    //Function To fetch delivery address data based on id on edit click..
    async function fetchEditDeliveryAddressData() {
        var editedData = await deliverList.find((data) => data.id === props.editDeliveryAddressId) || ((defaultAddress.id === props.editDeliveryAddressId) && { ...defaultAddress });
        if (editedData) {
            setAddressFormData({ ...editedData });
        }
    }

    useEffect(() => {
        !props.isAddNewAddress && fetchEditDeliveryAddressData();
        // console.log(props.isAddNewAddress);
        if (deliverList) {
            if (props.isAddNewAddress) {
                localStorage.setItem('deliveryAdd', JSON.stringify(deliverList));
                dispatch(addDeliveryAdd(JSON.parse(localStorage.getItem('deliveryAdd'))));
                // console.log('Add new address Effect');
            }
            else {
                localStorage.setItem('deliveryAdd', JSON.stringify(deliverList));
                dispatch(updateDeliveryAdd(addressFormData));
                // console.log('Update address Effect');
            }
        }
    }, [deliverList])
    return (
        <>
            <h3>{props.title}</h3>
            <div className="addressFormParentContainer">
                <form onSubmit={handleFormAddressSubmit}>
                    <div className="inputFieldNameContainer">
                        <InputFieldReusable fieldInfo={{ title: 'First Name :', type: 'text', name: 'first_name', placeholder: 'First Name', className: 'fNameInputField', value: addressFormData.first_name, onchange: handleFormAddressChange }} />
                        <InputFieldReusable fieldInfo={{ title: 'Last Name :', type: 'text', name: 'last_name', placeholder: 'Last Name', className: 'lNameInputField', value: addressFormData.last_name, onchange: handleFormAddressChange }} />
                    </div>
                    <div>
                        <InputFieldReusable fieldInfo={{ title: 'Address Line 1 :', type: 'text', name: 'add_line1', placeholder: 'Address Line 1', className: 'addressLine1InputField', value: addressFormData.add_line1, onchange: handleFormAddressChange }} />
                        <InputFieldReusable fieldInfo={{ title: 'Address Line 2 :', type: 'text', name: 'add_line2', placeholder: 'Address Line 2', className: 'addressLine2InputField', value: addressFormData.add_line2, onchange: handleFormAddressChange }} />
                    </div>
                    <div className="inputFieldGroupContainer">
                        <InputFieldReusable fieldInfo={{ title: 'Company :', type: 'text', name: 'company', placeholder: 'Company', className: 'companyInputField', value: addressFormData.company, onchange: handleFormAddressChange }} />
                        <InputFieldReusable fieldInfo={{ title: 'Postal/Zip Code :', type: 'text', name: 'postal_code', placeholder: 'Postal/Zip Code', className: 'postalInputField', value: addressFormData.postal_code, onchange: handleFormAddressChange }} />
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
                    {
                        !addressFormData.isdefault_add &&
                        <div className="addressDefaultCheckboxField">
                            <input type="checkbox" id='default_address' name="default_address" className="addressDefaultCheckboxField" onChange={handleFormAddressChange} checked={addressFormData.isdefault_add} />
                            <label htmlFor="default_address">Mark As Default Address</label>
                        </div>
                    }
                    <div className='delivertAddFormBtnStyle'>
                        <FormButtonComponent fieldInfo={{ title: 'Cancle', className: 'formCancelBtn', type: 'button', onclick: () => { props.setIsViewDelivery(true); dispatch(isAddressAdded(false)) } }} />
                        <FormButtonComponent fieldInfo={{ title: 'Save', className: 'formSaveBtn', type: 'Submit', disable: error }} />
                    </div>
                </form>
                <div>
                    {
                        props.isAddNewAddress ?
                            <SnackbarReusableComponent snackbarInfo={{ style: 'black', message: 'Adding New Address..' }} snackbarState={snackbarState} />
                            :
                            <SnackbarReusableComponent snackbarInfo={{ style: 'black', message: 'Updating Address..' }} snackbarState={snackbarState} />
                    }
                </div>
            </div>
        </>
    )
}