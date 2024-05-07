import React, { useEffect, useState } from 'react';
import userData from '../../../constentData/loginUserData.json';
import './myprofile.css';
import { useNavigate } from 'react-router-dom';

export default function MyProfile() {
    const [user,setUser] = useState(userData.users[0]);
    const localStorageData=JSON.parse(localStorage.getItem('editData'));
    const formDetail={
        first_name:'First Name',
        last_name:'Last Name',
        email:'Email',
        contact_number:'Contact Number',
        country_callingcode:'',
        birthdate:'Birthdate',
        gender:'Gender'
    };
const navigate=useNavigate();
    
useEffect(()=>{
        if(localStorageData){
            return setUser(localStorageData);
        }
        else{
            return setUser(userData.users[0]);
        }
},[])

    return (
        <>
            <div>
                <dl>
                    {
                        Object.keys(formDetail).map((form)=>
                            <div key={form} className='formContainerStyle'>
                                <dt>{`${form==='country_callingcode'?'':formDetail[form]+' :'}`}</dt>
                                <dd>{`${form==='gender'?user[form].toUpperCase():form==='contact_number'?user["country_callingcode"]+user[form]:form==='country_callingcode'?'':user[form]}`}</dd>
                            </div>
                        )
                    }
                </dl>
                <button type='button' className='formEditBtn' onClick={()=>{navigate(`/updateform/${user.id}`)}}>Edit</button>
            </div>
        </>
    )
}