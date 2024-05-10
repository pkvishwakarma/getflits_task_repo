import React, { useEffect, useState } from 'react';
import './myprofile.css';
import Slide from '@mui/material/Slide';
import SnackbarReusableComponent from '../../formReusableComponents/snackbarResuableComponent';
import FormButtonComponent from '../../formReusableComponents/formButtonComponent';
import { useSelector } from 'react-redux';

export default function ViewProfile(props) {
    var {setUserid,setIsViewProfile}=props;
    const user = useSelector((state)=>state.userdata);
    const formDetail={
        first_name:'First Name',
        last_name:'Last Name',
        email:'Email',
        contact_number:'Contact Number',
        country_callingcode:'',
        birthdate:'Birthdate',
        gender:'Gender'
    };
const [snackbarState, setSnackbarState] = useState({
    open: false,
    Transition: Slide,
});

useEffect(()=>{
        setUserid(user.id);
        
},[])

    return (
        <>
            <div>
                <dl>
                    {
                        Object.keys(formDetail).map((form)=>
                            <div key={form} className='formContainerStyle'>
                                <dt>{`${form==='country_callingcode'?'':formDetail[form]+' :'}`}</dt>
                                <dd>{`${form==='contact_number'?user["country_callingcode"]+user[form]:form==='country_callingcode'?'':user[form]}`}</dd>
                            </div>
                        )
                    }
                </dl>
                <FormButtonComponent fieldInfo={{title:'Edit',className:'formEditBtn',type:'button',onclick:()=>{setIsViewProfile(false)}}} />
                <SnackbarReusableComponent snackbarInfo={{style:'green',message:'Profile Updated Successfully'}} snackbarState={snackbarState} />
            </div>
        </>
    )
}