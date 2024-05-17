import React, { useEffect, useState } from "react";
import '../nav_Components/pages/myprofile/updateForm.css';

export default function ContactInputFieldComponent({ contact_template, setError }) {
    const [countryData, setCountryData] = useState([]);
    const [countryDetail, setCountryDetail] = useState({
        flag: ''
    });
    var { title, type, name, value, onchange, className, placeholder } = contact_template;
    var callingcodeInfo = FetchCountryInfoBasedOnCallingcode();
    //Using ternary Operator giving dynamic value to quantifire and storing a string as regExp.
    var telRegExp = (`^\\d{${13 - value[0].length}}$`);
    //Now Converting string to form of RegExp using new RegExp Method.
    telRegExp = new RegExp(telRegExp);

    // Fetching Country info like (flag,callingcode and Country name)..
    async function LoadCountryData() {
        try {
           await fetch('https://countryinfoapi.com/api/countries/')
                .then((res) => res.json())
                .then((res) => setCountryData([...res]));
        } catch (error) {
            console.log(error);
        }
    }

    //Fetching Country Info based on Callingcode to fill contact Field dynamically
    function FetchCountryInfoBasedOnCallingcode() {
        var countryInfoCallingcode = countryData?.filter((data) => data.callingcode === value[0]);
        return JSON?.stringify(countryInfoCallingcode[0]);
    }

    //using this function updating countryDetail state with callingcode received from user..
    function LoadCallingcodeCountryDetail() {
        try {
            var callingInfo = JSON?.parse(callingcodeInfo);
        setCountryDetail({
            flag: callingInfo?.flag
        })
        } catch (error) {
            console.log(error);
        }
    }

    //Matching Contact length with RegExp and returning a error msg if Match found Null.
    function ContactMatch() {
        var res = value[1]?.match(telRegExp);
        return !res && <span style={{ color: 'red' }}>Invalid Contact Number..</span>
    }

    useEffect(() => {
        LoadCountryData();
        ContactMatch();
        //Handiling callingcodeInfo Variable Undefined error..
        if (callingcodeInfo) {
            LoadCallingcodeCountryDetail();
        }
        else {
            FetchCountryInfoBasedOnCallingcode();
        }

        //Handling modify form save button disabled based on Contact Matches regExp..
        if (value[1]?.match(telRegExp) !== null) {
            setError(false)
        }
        else if(value[1]===''){
            setError(false);
        }
        else {
            setError(true);
        }
    }, [callingcodeInfo, value[1]]);

    return (
        <>
            <div key={name[1]}>
                <label htmlFor={name[1]}>{title}</label>
                <div className={className[0]}>
                    <input type={type[0]} name={name[0]} value={value[0]} onChange={onchange} readOnly />
                    <input type={type[1]} name={name[1]} value={value[1]} onChange={onchange} placeholder={placeholder} />

                    <div className={className[1]}>
                        <select className={className[2]} name={name[2]} value={callingcodeInfo} onChange={onchange}>
                            {
                                countryData.map((country) =>
                                    <option key={country.name} value={JSON.stringify(country)}>{`${country.name}(${country.callingcode})`}</option>
                                )
                            }
                        </select>
                        <span id="flag"><img src={countryDetail?.flag} alt="cf" width={35} /></span>
                    </div>
                </div>
                {value[1]===''?'':ContactMatch()}
            </div>
        </>
    )
}