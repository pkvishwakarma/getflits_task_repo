import React, { useEffect, useState } from "react";

export default function FormSelectComponent(props) {
    var selectProp = props.fieldInfo;
    const [countries, setCountries] = useState([]);

    async function loadAllCountryName() {
        try {
           await fetch('https://restcountries.com/v3.1/all')
                .then((res)=>res.json())
                .then((response)=>setCountries(response))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadAllCountryName();
    }, [])
    return (
        <>
            <div key={selectProp.name} className='inputContainer'>
                <label htmlFor={selectProp.name}>{selectProp.title}</label>
                <select name={selectProp.name} value={selectProp.value} onChange={selectProp.onchange} className={selectProp.className}>
                    {selectProp.name === 'country' || selectProp.name === 'province' ? <option defaultValue=""></option> : ''}
                    {
                        selectProp.name==='country'?
                        countries.map(country => (
                            <option key={country.cca2} value={country.name.common}>{country.name.common}</option>
                          ))
                        :
                        selectProp.optText.map((text, ind) =>
                            <option key={text} value={selectProp.optValue[ind]}>{text}</option>
                        )
                    }
                </select>
            </div>
        </>
    )
}