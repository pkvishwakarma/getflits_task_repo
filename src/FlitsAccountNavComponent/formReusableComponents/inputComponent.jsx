import React from 'react';
import '../nav_Components/pages/updateForm.css';

export default function FormInputComponent({ template }) {
    var {fields}=template;
    function renderFields(fields){
        return fields.map((field)=>{
            let {title,type,name,value,onchange}=field;
            return(
                <div key={name} className='inputContainer'>
                    <label htmlFor={name}>{title}</label>
                    <input type={type} name={name} value={value} onChange={onchange} />
                </div>
            )
        })
    }

    return (
        <>
            {
            renderFields(fields)
            }
        </>
    )
}


//Cut Paste This Template to that component where you want to create dynamice input field using map iterator..
//Creating Input Field Template for Input reusable Component..
    // let template = {
    //     fields: [
    //         {
    //             title: 'First Name :',
    //             type: 'text',
    //             name: 'first_name',
    //             value: editFormData.first_name,
    //             onchange: handleEditFormChange
    //         },
    //         {
    //             title: 'Last Name :',
    //             type: 'text',
    //             name: 'last_name',
    //             value: editFormData.last_name,
    //             onchange: handleEditFormChange
    //         },
    //         {
    //             title: 'Email :',
    //             type: 'email',
    //             name: 'email',
    //             value: editFormData.email,
    //             onchange: handleEditFormChange
    //         }
    //     ]
    // };