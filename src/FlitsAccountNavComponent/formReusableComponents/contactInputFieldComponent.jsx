import React,{useEffect, useState} from "react";
import '../nav_Components/pages/updateForm.css';

export default function ContactInputFieldComponent({contact_template,setEditFormData}) {
    const [countryData, setCountryData] = useState([]);
    const [countryDetail, setCountryDetail] = useState({
        flag: ''
    });
    var {title,type,name,value,onchange}=contact_template;
    var callingcodeInfo = FetchCountryInfoBasedOnCallingcode();

    // Fetching Country info like (flag,callingcode and Country name)..
    function LoadCountryData() {
        fetch('https://countryinfoapi.com/api/countries/')
            .then((res) => res.json())
            .then((res) => setCountryData([...res]));
    }

    //Fetching Country Info based on Callingcode to fill contact Field dynamically
    function FetchCountryInfoBasedOnCallingcode() {
        var countryInfoCallingcode = countryData?.filter((data) => data.callingcode === value[0]);
        return JSON?.stringify(countryInfoCallingcode[0]);
    }

    //using this function updating countryDetail state with callingcode received from user..
    function LoadCallingcodeCountryDetail() {
        var callingInfo = JSON?.parse(callingcodeInfo);
        setCountryDetail({
            flag: callingInfo?.flag
        })
        setEditFormData((pre) => { return { ...pre, country_callingcode: callingInfo?.callingcode } });
    }

    useEffect(()=>{
        LoadCountryData();
        //Handiling callingcodeInfo Variable Undefined error..
        if (callingcodeInfo) {
            LoadCallingcodeCountryDetail();
        }
        else {
            FetchCountryInfoBasedOnCallingcode(); 
        }
    },[callingcodeInfo])

    return (
        <>
            <div key={name[1]}>
                <label htmlFor={name[1]}>{title}</label>
                <div className="contact_parent">
                    <input type={type[0]} name={name[0]} value={value[0]} onChange={onchange} readOnly />
                    <input type={type[1]} name={name[1]} value={value[1]} onChange={onchange} />

                    <div className="country-selector">
                        <select id="countryDropdown" name={name[2]} value={callingcodeInfo} onChange={onchange}>
                            {
                                countryData.map((country) =>
                                    <option key={country.name} value={JSON.stringify(country)}>{`${country.name}(${country.callingcode})`}</option>
                                )
                            }
                        </select>
                        <span id="flag"><img src={countryDetail?.flag} alt="cf" width={35} /></span>
                    </div>
                </div>
            </div>
        </>
    )
}