import React, { useEffect, useState } from 'react';
import userData from '../../../constentData/loginUserData.json';
import { useNavigate, useParams } from 'react-router-dom';
import './updateForm.css';
import Slide from '@mui/material/Slide';
import ContactInputFieldComponent from '../../formReusableComponents/contactInputFieldComponent';
import InputFieldReusable from '../../formReusableComponents/inputField_reusable';
import FormSelectComponent from '../../formReusableComponents/formSelectComponent';
import FormButtonComponent from '../../formReusableComponents/formButtonComponent';
import SnackbarReusableComponent from '../../formReusableComponents/snackbarResuableComponent';

export default function UpdateForm() {
    const id = useParams();
    const navigate = useNavigate();
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
    const [error,setError]=useState(false);
    // var maxLength=editFormData.country_callingcode.length;
    // console.log(maxLength);
    // var regExp=(/^\d{}$/)

    //Handling Edit form changes and collecting data to store in a state.
    function handleEditFormChange(e) {
        var countryInfo = e.target.name === 'country_dropdown' && JSON.parse(e.target.value);
        var name = e.target.name;
        setEditFormData((pre) => {
            return (name === 'country_dropdown' ? { ...pre, country_callingcode: countryInfo?.callingcode } : { ...pre, [name]: e?.target.value });
        });
        if(e.target.value===''){
            setError(true);
        }
        else{
            setError(false);
        }
    }

    //Handling Edit form Submition..
    function handleEditFormSubmit(e) {
        e.preventDefault();
        localStorage.setItem('editData', JSON.stringify(editFormData));
        setSnackbarState((pre) => { return { ...pre, open: true } });
        setTimeout(() => {
            navigate("/myprofile");
        }, 2000)
    }

    useEffect(() => {
        //Filtering User Info from Local Json or Lacal Storage than updating the EditFormData State to auto field the Update form..
        if (localStorage.getItem('editData')) {
            return setEditFormData({ ...JSON.parse(localStorage.getItem('editData')) })
        }
        else {
            var getUserById = userData.users.find((user) => user.id === parseInt(id.id));
            setEditFormData({ ...getUserById });
        }
    }, [id]);

    return (
        <>
            <div className='updateFormContainer'>
                <form onSubmit={handleEditFormSubmit}>
                    <InputFieldReusable fieldInfo={{ title: 'First Name :', type: 'text', name: 'first_name', value: editFormData?.first_name, onchange: handleEditFormChange, isError:(editFormData.first_name===''?true:false), errorMsg:'First Name Required' }} />
                    <InputFieldReusable fieldInfo={{ title: 'Last Name :', type: 'text', name: 'last_name', value: editFormData?.last_name, onchange: handleEditFormChange, isError:(editFormData.last_name===''?true:false), errorMsg:'Last Name Required' }} />
                    <InputFieldReusable fieldInfo={{ title: 'Email :', type: 'email', name: 'email', value: editFormData?.email, onchange: handleEditFormChange, isError:(editFormData.email===''?true:false), errorMsg:'Email is Required' }} />
                    <ContactInputFieldComponent contact_template={{
                        title: 'Contact Number :',
                        type: ['text', 'tel'],
                        name: ['country_callingcode', 'contact_number', 'country_dropdown'],
                        value: [editFormData?.country_callingcode, editFormData?.contact_number],
                        onchange: handleEditFormChange
                    }} setEditFormData={setEditFormData} />
                    <InputFieldReusable fieldInfo={{ title: 'Birthdate :', type: 'date', name: 'birthdate', value: editFormData?.birthdate, onchange: handleEditFormChange, isError:(editFormData.birthdate===''?true:false), errorMsg:'Birthdate is Required' }} />
                    <FormSelectComponent fieldInfo={{title:'Gender :',name:'gender',value:editFormData?.gender,onchange:handleEditFormChange,optValue:['female','male','other'],optText:['Female','Male','Other']}} />
                    <FormButtonComponent fieldInfo={{title:'Cancle',className:'formCancelBtn',type:'button',onclick:()=>{navigate('/myprofile')}}} />
                    <FormButtonComponent fieldInfo={{title:'Save',className:'formSaveBtn',type:'Submit',disable:error}} />
                </form>
                <SnackbarReusableComponent snackbarInfo={{style:'black',message:'Saving Profile Details..'}} snackbarState={snackbarState} />
            </div>
        </>
    )
}