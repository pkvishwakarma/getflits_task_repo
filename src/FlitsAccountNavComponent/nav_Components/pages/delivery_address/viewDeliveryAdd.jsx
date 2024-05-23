import React, { useEffect, useState } from "react";
import './deliveryAdd.css';
import FormButtonComponent from '../../../formReusableComponents/formButtonComponent';
import { useSelector, useDispatch } from "react-redux";
import { Container, Pagination } from '@mui/material';
import Slide from '@mui/material/Slide';
import SnackbarReusableComponent from '../../../formReusableComponents/snackbarResuableComponent';
import { deleteDeliveryAdd } from '../../../useReducer_reduxComponent/store/store'

export default function ViewDeliveryAdd(props) {
    var { setIsViewDelivery, setIsAddNewAddress, setEditDeliveryAddressId, isAddNewAddress } = props;
    var deliveryAddData = (useSelector((state) => state.deliveryData.deliveryAddCollection));
    var isDeliveryAddAdded = (useSelector((state) => state.deliveryData.isAddress));
    var defaultAddress = (useSelector((state) => state.deliveryData.defaultAddress));
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
    var currentAddresses = deliveryAddData[0]?.slice(indexOfFirstAddress, indexOfLastAddress);

    //Handling Pagination Change..
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    //Pagination Funtionality ends..

    const [isDeleted, setIsDeleted] = useState('');
    //Handle Delete Functionality for Delivery Address component..
    async function handleDeliveryAddressDeleteClick(id) {
        var copyDeliveryAddData = [...deliveryAddData[0]];
        var filteredAddressAfterDelete = copyDeliveryAddData.filter((add) => add.id !== id);
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
        console.log(id);
    }

    useEffect(() => {
        // console.log(deliveryAddData[0]);
        try {
            if (!deliveryAddData) {
                currentAddresses = deliveryAddData[0]?.slice(indexOfFirstAddress, indexOfLastAddress)
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
                            title: <><img src="./images/icons/plus-circle.svg" alt="plus-icon" className="addPlusIcon" />
                                <p className='addNewAddressBtn'>Add New Address</p></>, className: 'addNewAddBtnContainer', type: 'button', onclick: () => { setIsViewDelivery(false); setIsAddNewAddress(true) }
                        }} />
                    </div>
                    {
                        Object.keys(defaultAddress).length!==0 &&
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
                                <img src={'./images/icons/Pencil-Edit.png'} alt="editIcon" width={25} className="editIcon1" />
                                <img src={'./images/icons/Pencil-Edit_black.png'} alt="editIconBlack" width={23} className="editIcon2" title="Edit" />
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
                                    <img src={'./images/icons/Pencil-Edit.png'} alt="editIcon" width={25} className="editIcon1" />
                                    <img src={'./images/icons/Pencil-Edit_black.png'} alt="editIconBlack" width={23} className="editIcon2" title="Edit" />
                                </div>
                                <div className="trashIconContainer" onClick={() => { handleDeliveryAddressDeleteClick(address.id); setIsAddNewAddress('') }}>
                                    <img src={'./images/icons/Delete-Bin.svg'} alt="trashIcon" width={25} className="trashIcon1" />
                                    <img src={'./images/icons/Delete-Bin_black.png'} alt="trashIconBlack" width={23} className="trashIcon2" title="Delete" />
                                </div>
                                <div className="bookmarkIconContainer" onClick={() => { handleDeliveryAddressBookmarkClick(address.id); setIsAddNewAddress('') }}>
                                    <img src={'./images/icons/bookmark.svg'} alt="bookmarkIcon" width={25} className="bookmarkIcon1" />
                                    <img src={'./images/icons/Bookmark-Black.png'} alt="bookmarkIconBlack" width={23} className="bookmarkIcon2" title="Default" />
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="paginationContainer">
                    <div>
                        {
                            deliveryAddData[0]?.length > 6 &&
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