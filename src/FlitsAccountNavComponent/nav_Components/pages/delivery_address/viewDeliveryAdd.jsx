import React, { useEffect, useState } from "react";
import './deliveryAdd.css';
import FormButtonComponent from '../../../formReusableComponents/formButtonComponent';
import { useSelector } from "react-redux";
import { Container, Pagination } from '@mui/material';
import Slide from '@mui/material/Slide';
import SnackbarReusableComponent from '../../../formReusableComponents/snackbarResuableComponent';

export default function ViewDeliveryAdd(props) {
    var { setIsViewDelivery } = props;
    var deliveryAddData = (useSelector((state) => state.deliveryData.deliveryAddCollection));
    var isDeliveryAddAdded = (useSelector((state) => state.deliveryData.isAddress));
    const [snackbarState, setSnackbarState] = useState({
        open: false,
        Transition: Slide,
    });

    //Pagination State starts..
    const [page, setPage] = useState(1);
    const addressesPerPage = 6;
    const indexOfLastAddress = page * addressesPerPage;
    const indexOfFirstAddress = indexOfLastAddress - addressesPerPage;
    const currentAddresses = deliveryAddData.slice(indexOfFirstAddress, indexOfLastAddress);

    //Handling Pagination Change..
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    //Pagination Funtionality ends..

    useEffect(() => {
        isDeliveryAddAdded && setSnackbarState((pre) => { return { ...pre, open: true } });
    }, [isDeliveryAddAdded])

    return (
        <>
            <div>
                <div>
                    <FormButtonComponent fieldInfo={{
                        title: <><img src="./images/icons/plus-circle.svg" alt="plus-icon" className="addPlusIcon" />
                            <p className='addNewAddressBtn'>Add New Address</p></>, className: 'addNewAddBtnParentContainer', type: 'button', onclick: () => { setIsViewDelivery(false) }
                    }} />
                </div>
                <div className="deliveryAddressListContainer">
                    {
                        currentAddresses.map((address) =>
                            <div key={address.first_name + address.contact_number} className="deliveryAddressList">
                                <p className="deliveryClientName">{`${address?.first_name} ${address?.last_name}`}</p>
                                <p>{address?.company}</p>
                                <p>{address?.add_line1}</p>
                                <p>{address?.add_line2}</p>
                                <p>{address?.postal_code} {address?.city}</p>
                                <p>{address?.country}</p>
                                <p>{address?.country_callingcode}{address?.contact_number}</p>
                                <div className="editIconContainer">
                                    <img src={'./images/icons/Pencil-Edit.png'} alt="editIcon" width={25} className="editIcon1" />
                                    <img src={'./images/icons/Pencil-Edit_black.png'} alt="editIconBlack" width={23} className="editIcon2" title="Edit" />
                                </div>
                                <div className="trashIconContainer">
                                    <img src={'./images/icons/Delete-Bin.svg'} alt="trashIcon" width={25} className="trashIcon1" />
                                    <img src={'./images/icons/Delete-Bin_black.png'} alt="trashIconBlack" width={23} className="trashIcon2" title="Delete" />
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="paginationContainer">
                    <div>
                        {
                            deliveryAddData.length > 6 &&
                            <Container>
                                <Pagination
                                    count={Math.ceil(deliveryAddData.length / addressesPerPage)}
                                    page={page}
                                    onChange={handleChangePage}
                                />
                            </Container>
                        }
                    </div>
                </div>
                <div>
                    <SnackbarReusableComponent snackbarInfo={{ style: 'green', message: 'Delivery Address Added Successfully' }} snackbarState={snackbarState} />
                </div>
            </div>
        </>
    )
}