import React, { useEffect, useState } from 'react';
import userData from '../../../constentData/loginUserData.json';
import { useNavigate, useParams } from 'react-router-dom';
import './updateForm.css';
import { Snackbar } from '@mui/material';
import SnackbarContent from '@mui/material/SnackbarContent';
import Slide from '@mui/material/Slide';
import FormInputComponent from '../../formReusableComponents/inputComponent';

export default function UpdateForm() {
    const [countryData, setCountryData] = useState([]);
    const [countryDetail, setCountryDetail] = useState({
        flag: ''
    })
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
    var callingcodeInfo = FetchCountryInfoBasedOnCallingcode();
    const [snackbarState, setSnackbarState] = useState({
        open: false,
        Transition: Slide,
    });
    let template={
        fields:[
            {
                title:'First Name :',
                type:'text',
                name:'first_name',
                value:editFormData.first_name,
                onchange:handleEditFormChange
            },
            {
                title:'Last Name :',
                type:'text',
                name:'last_name',
                value:editFormData.last_name,
                onchange:handleEditFormChange
            },
            {
                title:'Email :',
                type:'email',
                name:'email',
                value:editFormData.email,
                onchange:handleEditFormChange
            }
        ]
    }


    // Fetching Country info like (flag,callingcode and Country name)..
    function LoadCountryData() {
        fetch('https://countryinfoapi.com/api/countries/')
            .then((res) => res.json())
            .then((res) => setCountryData([...res]));
    }

    //Fetching Country Info based on Callingcode to fill contact Field dynamically
    function FetchCountryInfoBasedOnCallingcode() {
        var countryInfoCallingcode = countryData?.filter((data) => data.callingcode === editFormData?.country_callingcode);
        return JSON?.stringify(countryInfoCallingcode[0]);
    }

    //using this function updating countryDetail state with callingcode received from user..
    function LoadCallingcodeCountryDetail() {
        var callingInfo = JSON?.parse(callingcodeInfo);
        setCountryDetail({
            flag: callingInfo?.flag
        })
        setEditFormData((pre) => { return { ...pre, country_callingcode: callingInfo?.callingcode } });
    }

    //Handling Edit form changes and collecting data to store in a state.
    function handleEditFormChange(e) {
        var countryInfo = e.target.name==='country_dropdown' && JSON.parse(e.target.value);
        setCountryDetail({
            flag: countryInfo?.flag
        });
        var name = e.target.name;
        setEditFormData((pre) => {
            return (name==='country_dropdown'?{...pre,country_callingcode:countryInfo?.callingcode}:{...pre,[name]: e?.target.value});
        });
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
        LoadCountryData();

        //Handiling callingcodeInfo Variable Undefined error..
        if (callingcodeInfo) {
            LoadCallingcodeCountryDetail();
        }
        else {
            FetchCountryInfoBasedOnCallingcode(); 
        }
        
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
                        <FormInputComponent template={template} />
                    <div>
                        <label htmlFor="contact_number">Contact Number :</label>
                        <div className="contact_parent">
                            <input type="text" name='country_callingcode' value={editFormData.country_callingcode} readOnly onChange={handleEditFormChange} />
                            <input type="tel" name='contact_number' value={editFormData?.contact_number} onChange={handleEditFormChange} />

                            <div className="country-selector">
                                <select id="countryDropdown" name='country_dropdown' value={callingcodeInfo} onChange={handleEditFormChange}>
                                    {
                                        countryData.map((country) =>
                                            <option key={country.name} value={JSON.stringify(country)}>{`${country.name}(${country.callingcode})`}</option>
                                        )
                                    }
                                </select>
                                <span id="flag"><img src={countryDetail?.flag} alt="cf" width={35} /></span>
                            </div>
                        </div>
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor="birthdate">Birthdate :</label>
                        <input type="date" name='birthdate' value={editFormData?.birthdate} onChange={handleEditFormChange} />
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor="gender">Gender :</label>
                        <select name='gender' value={editFormData?.gender} onChange={handleEditFormChange}>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <button type='button' className='formCancelBtn'>Cancel</button>
                    <button className='formSaveBtn'>Save</button>
                </form>
                <div>
                    <Snackbar
                        open={snackbarState.open}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center'
                        }}
                        onClose={() => setSnackbarState((pre) => { return { ...pre, open: false } })}
                        TransitionComponent={snackbarState.Transition}
                        autoHideDuration={2000}
                    >
                        <SnackbarContent style={{ backgroundColor: 'black' }} message="Saving Profile Details.." />
                    </Snackbar>
                </div>
            </div>
        </>
    )
}