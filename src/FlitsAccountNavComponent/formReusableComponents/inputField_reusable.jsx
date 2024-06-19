import React from "react";

export default function InputFieldReusable(props){
    var inputProp=props.fieldInfo;
    return(
        <>
            <div key={inputProp.name} className='inputContainer'>
                    <label htmlFor={inputProp.name}>{inputProp.title}</label>
                    <input type={inputProp.type} name={inputProp.name} value={inputProp.value} onChange={inputProp.onchange} placeholder={inputProp.placeholder} className={inputProp.className} required={inputProp.required} />
                    <div style={{color:'red'}}>{inputProp.isError && inputProp.errorMsg}</div>
            </div>
        </>
    )
}