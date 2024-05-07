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