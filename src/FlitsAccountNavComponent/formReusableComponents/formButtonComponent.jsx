import React from "react";

export default function FormButtonComponent(props){
    var btnProp=props.fieldInfo;
    return(
        <>
            <button type={btnProp.type} className={btnProp.className} onClick={btnProp.onclick} disabled={btnProp.disable}>{btnProp.title}</button>
        </>
    )
}