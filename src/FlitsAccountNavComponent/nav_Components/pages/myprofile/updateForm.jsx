import React, { useEffect, useState } from 'react';
import './updateForm.css';
import Slide from '@mui/material/Slide';
import ContactInputFieldComponent from '../../../formReusableComponents/contactInputFieldComponent';
import InputFieldReusable from '../../../formReusableComponents/inputField_reusable';
import FormSelectComponent from '../../../formReusableComponents/formSelectComponent';
import FormButtonComponent from '../../../formReusableComponents/formButtonComponent';
import SnackbarReusableComponent from '../../../formReusableComponents/snackbarResuableComponent';
import { useDispatch,useSelector } from 'react-redux';
import {userinfo,isModify} from '../../../useReducer_reduxComponent/store/store';

export default function UpdateForm(props) {
    var { userid, setIsViewProfile } = props;
    var dispatch = useDispatch();
    const user = useSelector((state) => state.initialUserData.userdata);
    const [editFormData, setEditFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        contact_number: '',
        country_callingcode: '',
        birthdate: '',
        gender: ''
    })
    const [snackbarState, setSnackbarState] = useState({
        open: false,
        Transition: Slide,
    });
    const [error, setError] = useState(false);

    //Handling Edit form changes and collecting data to store in a state.
    function handleEditFormChange(e) {
        var countryInfo = e.target.name === 'country_dropdown' && JSON.parse(e.target.value);
        var name = e.target.name;
        setEditFormData((pre) => {
            return (name === 'country_dropdown' ? { ...pre, country_callingcode: countryInfo?.callingcode } : { ...pre, [name]: e?.target.value });
        });
        if (e.target.value === '') {
            setError(true);
        }
        else {
            setError(false);
        }
    }

    //Handling Edit form Submition..
    function handleEditFormSubmit(e) {
        e.preventDefault();
        localStorage.setItem('userdata', JSON.stringify(editFormData));
        dispatch(userinfo(JSON.parse(localStorage?.getItem('userdata'))));
        dispatch(isModify(true));
        setSnackbarState((pre) => { return { ...pre, open: true } });
        setTimeout(() => {
            setIsViewProfile(true);
        }, 2000)
    }

    useEffect(() => {
        //Filtering User Info from global state (UseReducer) than updating the EditFormData State to auto field the Update form..
        var getUserById = Object.entries({ user })[0].find((usr) => usr.id === parseInt(userid));
        setEditFormData({ ...getUserById });
    }, [userid]);

    return (
        <>
            <div className='updateFormContainer'>
                <form onSubmit={handleEditFormSubmit}>
                    <InputFieldReusable fieldInfo={{ title: 'First Name :', type: 'text', name: 'first_name', value: editFormData?.first_name, onchange: handleEditFormChange, isError: (editFormData.first_name === '' ? true : false), errorMsg: 'First Name Required', className:'fNameUpdateField' }} />
                    <InputFieldReusable fieldInfo={{ title: 'Last Name :', type: 'text', name: 'last_name', value: editFormData?.last_name, onchange: handleEditFormChange, isError: (editFormData.last_name === '' ? true : false), errorMsg: 'Last Name Required', className:'lNameUpdateField' }} />
                    <InputFieldReusable fieldInfo={{ title: 'Email :', type: 'email', name: 'email', value: editFormData?.email, onchange: handleEditFormChange, isError: (editFormData.email === '' ? true : false), errorMsg: 'Email is Required', className:'emailUpdateField' }} />
                    <ContactInputFieldComponent contact_template={{
                        title: 'Contact Number :',
                        type: ['text', 'tel'],
                        name: ['country_callingcode', 'contact_number', 'country_dropdown'],
                        value: [editFormData?.country_callingcode, editFormData?.contact_number],
                        onchange: handleEditFormChange,
                        className:['contact_parent','country-selector','countryDropdown']
                    }} setError={setError} />
                    <InputFieldReusable fieldInfo={{ title: 'Birthdate :', type: 'date', name: 'birthdate', value: editFormData?.birthdate, onchange: handleEditFormChange, isError: (editFormData.birthdate === '' ? true : false), errorMsg: 'Birthdate is Required',className:'birthdateUpdateField' }} />
                    <FormSelectComponent fieldInfo={{ title: 'Gender :', name: 'gender', value: editFormData?.gender, onchange: handleEditFormChange, optValue: ['female', 'male', 'other'], optText: ['Female', 'Male', 'Other'],className:'genderUpdateField' }} />
                    <div className='updateFormBtnStyle'>
                        <FormButtonComponent fieldInfo={{ title: 'Cancle', className: 'formCancelBtn', type: 'button', onclick: () => { setIsViewProfile(true); dispatch(isModify(false)) } }} />
                        <FormButtonComponent fieldInfo={{ title: 'Save', className: 'formSaveBtn', type: 'Submit', disable: error }} />
                    </div>
                </form>
                <SnackbarReusableComponent snackbarInfo={{ style: 'black', message: 'Saving Profile Details..' }} snackbarState={snackbarState} />
            </div>
        </>
    )
}