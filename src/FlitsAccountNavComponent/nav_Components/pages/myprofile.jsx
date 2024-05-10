import React, { useState } from 'react';
import './myprofile.css';
import ViewProfile from './viewProfile';
import UpdateForm from './updateForm';

export default function MyProfile() {
    const [userid, setUserid] = useState(0);
    const [isViewProfile, setIsViewProfile] = useState(true);

    return (
        <>
            {
                isViewProfile ? <ViewProfile setUserid={setUserid} setIsViewProfile={setIsViewProfile} />
                    :
                    <UpdateForm userid={userid} setIsViewProfile={setIsViewProfile} />
            }
        </>
    )
}