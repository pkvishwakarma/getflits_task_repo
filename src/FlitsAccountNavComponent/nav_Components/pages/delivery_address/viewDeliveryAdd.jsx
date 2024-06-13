import React, { useEffect, useState } from "react";
import './deliveryAdd.css';
import FormButtonComponent from '../../../formReusableComponents/formButtonComponent';
import { useSelector, useDispatch } from "react-redux";
import { Container, Pagination } from '@mui/material';
import Slide from '@mui/material/Slide';
import SnackbarReusableComponent from '../../../formReusableComponents/snackbarResuableComponent';
import { deleteDeliveryAdd, addDeliveryAdd } from '../../../useReducer_reduxComponent/store/store'

export default function ViewDeliveryAdd(props) {
    var { setIsViewDelivery, setIsAddNewAddress, setEditDeliveryAddressId, isAddNewAddress } = props;
    var deliveryAddData = (useSelector((state) => state.deliveryData.deliveryAddCollection));
    var generalDeliveryAdd = deliveryAddData[0]?.filter((data) => data.isdefault_add === false);
    var isDeliveryAddAdded = (useSelector((state) => state.deliveryData.isAddress));
    var defaultAddress = deliveryAddData[0]?.find((data) => data.isdefault_add === true) || {};
    var dispatch = useDispatch();
    const [snackbarState, setSnackbarState] = useState({
        open: false,
        Transition: Slide,
    });

    //Pagination State starts..
    const [page, setPage] = useState(1);
    const addressesPerPage = 6;
    var indexOfLastAddress = page * addressesPerPage;
    var indexOfFirstAddress = indexOfLastAddress - addressesPerPage;
    var currentAddresses = generalDeliveryAdd?.slice(indexOfFirstAddress, indexOfLastAddress);

    //Handling Pagination Change..
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    //Pagination Funtionality ends..

    const [isDeleted, setIsDeleted] = useState('');
    //Handle Delete Functionality for Delivery Address component..
    async function handleDeliveryAddressDeleteClick(id) {
        var copyDeliveryAddData = [...deliveryAddData[0]];
        var filteredAddressAfterDelete = copyDeliveryAddData?.filter((add) => add.id !== id);
        var deleteAlert = window.confirm(`Are you sure you want to delete this address?`);
        if (deleteAlert) {
            localStorage.setItem('deliveryAdd', JSON.stringify(filteredAddressAfterDelete));
            //Managing deleting snackbar and Deleted Snackbar..
            setIsDeleted(true);
            setSnackbarState((pre) => { return { ...pre, open: true } });
            setTimeout(() => {
                setSnackbarState((pre) => { return { ...pre, open: false } });
            }, 1000)
            dispatch(deleteDeliveryAdd(id));
        };
        setTimeout(() => {
            setIsDeleted(false);
            setSnackbarState((pre) => { return { ...pre, open: true } });
        }, 1100);
        setTimeout(() => {
            setIsDeleted('');
        }, 2800)
    }

    //Handling Bookmark or Default Address Functionality..
    function handleDeliveryAddressBookmarkClick(id) {
        var copyDeliveryAddData = [...deliveryAddData[0]];
        var bookmarkAddress = copyDeliveryAddData.map((data) => {
            if (data.id === id) {
                return { ...data, isdefault_add: true };
            }
            else {
                return { ...data, isdefault_add: false };
            }
        })
        localStorage.setItem('deliveryAdd', JSON.stringify(bookmarkAddress));
        dispatch(addDeliveryAdd(JSON.parse(localStorage.getItem('deliveryAdd'))));
    }

    useEffect(() => {
        // console.log(deliveryAddData[0]);
        // console.log(defaultAddress);
        // console.log(generalDeliveryAdd);
        // console.log(currentAddresses);
        try {
            if (!deliveryAddData) {
                currentAddresses = generalDeliveryAdd?.slice(indexOfFirstAddress, indexOfLastAddress);
            }
            isDeliveryAddAdded && setSnackbarState((pre) => { return { ...pre, open: true } });
        } catch (error) {
            console.log(error)
        }
    }, [isDeliveryAddAdded]);

    return (
        <>
            <div>
                <div className="addAddressAndDefaultAddParentContainer">
                    <div className='addNewAddBtnParentContainer'>
                        <FormButtonComponent fieldInfo={{
                            title: <>
                                {/* <img src="./images/icons/plus-circle.svg" alt="plus-icon" className="addPlusIcon" /> */}
                                <svg version="1.1" x="0px" y="0px" viewBox="0 0 52 52" className="addPlusIcon"> <g> <path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26 S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"></path> <path d="M38.5,25H27V14c0-0.553-0.448-1-1-1s-1,0.447-1,1v11H13.5c-0.552,0-1,0.447-1,1s0.448,1,1,1H25v12c0,0.553,0.448,1,1,1 s1-0.447,1-1V27h11.5c0.552,0,1-0.447,1-1S39.052,25,38.5,25z"></path> </g> </svg>
                                <p className='addNewAddressBtn'>Add New Address</p></>, className: 'addNewAddBtnContainer', type: 'button', onclick: () => { setIsViewDelivery(false); setIsAddNewAddress(true) }
                        }} />
                    </div>
                    {
                        Object.keys(defaultAddress)?.length !== 0 &&
                        <div className="deliveryAddressDefaultContainer">
                            <div key={defaultAddress?.id} >
                                <h3>DEFAULT</h3>
                                <p className="deliveryClientName">{`${defaultAddress?.first_name} ${defaultAddress?.last_name}`}</p>
                                <p>{defaultAddress?.company}</p>
                                <p>{defaultAddress?.add_line1}</p>
                                <p>{defaultAddress?.add_line2}</p>
                                <p>{defaultAddress?.postal_code} {defaultAddress?.city}</p>
                                <p>{defaultAddress?.country}</p>
                                <p>{defaultAddress?.country_callingcode}{defaultAddress?.contact_number}</p>
                                <div className="editIconContainer" onClick={() => { setIsViewDelivery(false); setIsAddNewAddress(false); setEditDeliveryAddressId(defaultAddress.id) }}>
                                    {/* <img src={'./images/icons/Pencil-Edit.png'} alt="editIcon" width={25} className="editIcon1" />
                                    <img src={'./images/icons/Pencil-Edit_black.png'} alt="editIconBlack" width={23} className="editIcon2" title="Edit" /> */}
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1" cursor='pointer'><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className="deliveryAddressListContainer">
                    {
                        currentAddresses !== null &&
                        currentAddresses?.map((address) =>
                            <div key={address?.id} className="deliveryAddressList">
                                <p className="deliveryClientName">{`${address?.first_name} ${address?.last_name}`}</p>
                                <p>{address?.company}</p>
                                <p>{address?.add_line1}</p>
                                <p>{address?.add_line2}</p>
                                <p>{address?.postal_code} {address?.city}</p>
                                <p>{address?.country}</p>
                                <p>{address?.country_callingcode}{address?.contact_number}</p>
                                <div className="editIconContainer" onClick={() => { setIsViewDelivery(false); setIsAddNewAddress(false); setEditDeliveryAddressId(address.id) }}>
                                    {/* <img src={'./images/icons/Pencil-Edit.png'} alt="editIcon" width={25} className="editIcon1" />
                                    <img src={'./images/icons/Pencil-Edit_black.png'} alt="editIconBlack" width={23} className="editIcon2" title="Edit" /> */}
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1 editIcon1" style={{display:'block',cursor:'pointer'}}><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                </div>
                                <div className="trashIconContainer" onClick={() => { handleDeliveryAddressDeleteClick(address.id); setIsAddNewAddress('') }}>
                                    {/* <img src={'./images/icons/Delete-Bin.svg'} alt="trashIcon" width={25} className="trashIcon1" />
                                    <img src={'./images/icons/Delete-Bin_black.png'} alt="trashIconBlack" width={23} className="trashIcon2" title="Delete" /> */}
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1 trashIcon1" style={{display:'block',cursor:'pointer'}}><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                </div>
                                <div className="bookmarkIconContainer" onClick={() => { handleDeliveryAddressBookmarkClick(address.id); setIsAddNewAddress('') }}>
                                    {/* <img src={'./images/icons/bookmark.svg'} alt="bookmarkIcon" width={25} className="bookmarkIcon1" />
                                    <img src={'./images/icons/Bookmark-Black.png'} alt="bookmarkIconBlack" width={23} className="bookmarkIcon2" title="Default" /> */}
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1 bookmarkIcon1" style={{display:'block',cursor:'pointer'}}><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="paginationContainer">
                    <div>
                        {
                            generalDeliveryAdd?.length > 6 &&
                            <Container>
                                <Pagination
                                    count={Math.ceil(deliveryAddData[0]?.length / addressesPerPage)}
                                    page={page}
                                    onChange={handleChangePage}
                                />
                            </Container>
                        }
                    </div>
                </div>
                <div>
                    {
                        isAddNewAddress !== '' && isAddNewAddress ?
                            <SnackbarReusableComponent snackbarInfo={{ style: 'green', message: 'Delivery Address Added Successfully' }} snackbarState={snackbarState} />
                            : isAddNewAddress !== '' ?
                                <SnackbarReusableComponent snackbarInfo={{ style: 'green', message: 'Delivery Address Updated Successfully' }} snackbarState={snackbarState} />
                                : ''
                    }
                </div>
                <div>
                    {
                        isDeleted ?
                            <SnackbarReusableComponent snackbarInfo={{ style: 'black', message: 'Deleting Address..' }} snackbarState={snackbarState} />
                            : isDeleted !== '' && isDeleted === false ?
                                <SnackbarReusableComponent snackbarInfo={{ style: 'green', message: 'Address Deleted Successfully' }} snackbarState={snackbarState} />
                                : ''
                    }
                </div>
            </div>
        </>
    )
}