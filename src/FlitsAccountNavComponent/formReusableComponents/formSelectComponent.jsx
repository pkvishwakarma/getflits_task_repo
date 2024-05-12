import React from "react";

export default function FormSelectComponent(props) {
    var selectProp=props.fieldInfo;
    return (
        <>
            <div key={selectProp.name} className='inputContainer'>
                <label htmlFor={selectProp.name}>{selectProp.title}</label>
                <select name={selectProp.name} value={selectProp.value} onChange={selectProp.onchange} className={selectProp.className}>
                    {
                        selectProp.optText.map((text,ind)=>
                        <option key={text} value={selectProp.optValue[ind]}>{text}</option>
                        )
                    }
                </select>
            </div>
        </>
    )
}