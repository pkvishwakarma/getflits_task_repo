import React, { useState } from 'react';
import './myOrder.css';
import { Container, Pagination } from '@mui/material';

export default function MyOrder() {
    const [orderId, setOrderId] = useState('');
    const [data] = useState(window.allorders ||
        [
            {
                "id": "5684547813623",
                "name": "#1004",
                "total_price": "59.00",
                "created_at": "2024-06-08 15:00:00 -0400",
                "order_status_url": "https://flits-support-workplace-18.myshopify.com/69714936055/orders/e2c78b8064864eb3018eb4aacae6e5ec/authenticate?key=e5a5521f433326f702de3a98841fe489",
                "fulfillment_status": "unfulfilled",
                "financial_status": "paid",
                "shipping_price": "0",
                "billing_address": {
                    "address1": "Ahmedpur Kalan Bagmugaliya",
                    "address2": "",
                    "city": "Bhopal",
                    "province": "Madhya Pradesh",
                    "province_code": "MP",
                    "country": "India",
                    "zip": "462026",
                    "first_name": "Pankaj",
                    "last_name": "Vishwakarma"
                },
                "customer_url": "https://flits-support-workplace-18.myshopify.com/account/orders/e2c78b8064864eb3018eb4aacae6e5ec",
                "item_count": "1",
                "shipping_address": {
                    "address1": "Ahmedpur Kalan Bagmugaliya",
                    "address2": "",
                    "city": "Bhopal",
                    "province": "Madhya Pradesh",
                    "province_code": "MP",
                    "country": "India",
                    "zip": "462026",
                    "first_name": "Pankaj",
                    "last_name": "Vishwakarma"
                },
                "subtotal_price": "5000",
                "tax_price": "900",
                "line_items": [
                    {
                        "title": "Ocean Blue Shirt",
                        "quantity": 1,
                        "price": "50.00",
                        "image": "files/young-man-in-bright-fashion_925x_8320d832-de43-4a5f-9509-9415a57b5db4.jpg"
                    }
                ]
            },
            {
                "id": "5684546011383",
                "name": "#1003",
                "total_price": "59.00",
                "created_at": "2024-06-08 14:58:55 -0400",
                "order_status_url": "https://flits-support-workplace-18.myshopify.com/69714936055/orders/36f8597339ac4d4b42df525f62b05b6b/authenticate?key=e06876ed4c489c9d472a029b97f68304",
                "fulfillment_status": "unfulfilled",
                "financial_status": "paid",
                "shipping_price": "0",
                "billing_address": {
                    "address1": "Ahmedpur Kalan Bagmugaliya",
                    "address2": "",
                    "city": "Bhopal",
                    "province": "Madhya Pradesh",
                    "province_code": "MP",
                    "country": "India",
                    "zip": "462026",
                    "first_name": "Pankaj",
                    "last_name": "Vishwakarma"
                },
                "customer_url": "https://flits-support-workplace-18.myshopify.com/account/orders/36f8597339ac4d4b42df525f62b05b6b",
                "item_count": "1",
                "shipping_address": {
                    "address1": "Ahmedpur Kalan Bagmugaliya",
                    "address2": "",
                    "city": "Bhopal",
                    "province": "Madhya Pradesh",
                    "province_code": "MP",
                    "country": "India",
                    "zip": "462026",
                    "first_name": "Pankaj",
                    "last_name": "Vishwakarma"
                },
                "subtotal_price": "5000",
                "tax_price": "900",
                "line_items": [
                    {
                        "title": "Chequered Red Shirt",
                        "quantity": 1,
                        "price": "50.00",
                        "image": "files/red-plaid-shirt_925x_2091d64a-080a-4a80-8139-b819ec8ac2a5.jpg"
                    }
                ]
            },
            {
                "id": "5684528283895",
                "name": "#1002",
                "total_price": "165.20",
                "created_at": "2024-06-08 14:46:33 -0400",
                "order_status_url": "https://flits-support-workplace-18.myshopify.com/69714936055/orders/fd2bbe7128374516e1889a9a0251f6ca/authenticate?key=2f8eed7c5b54b4e98dfe2c30bcd951d3",
                "fulfillment_status": "unfulfilled",
                "financial_status": "paid",
                "shipping_price": "0",
                "billing_address": {
                    "address1": "Ahmedpur Kalan Bagmugaliya",
                    "address2": "",
                    "city": "Bhopal",
                    "province": "Madhya Pradesh",
                    "province_code": "MP",
                    "country": "India",
                    "zip": "462026",
                    "first_name": "Pankaj",
                    "last_name": "Vishwakarma"
                },
                "customer_url": "https://flits-support-workplace-18.myshopify.com/account/orders/fd2bbe7128374516e1889a9a0251f6ca",
                "item_count": "2",
                "shipping_address": {
                    "address1": "Ahmedpur Kalan Bagmugaliya",
                    "address2": "",
                    "city": "Bhopal",
                    "province": "Madhya Pradesh",
                    "province_code": "MP",
                    "country": "India",
                    "zip": "462026",
                    "first_name": "Pankaj",
                    "last_name": "Vishwakarma"
                },
                "subtotal_price": "14000",
                "tax_price": "2520",
                "line_items": [
                    {
                        "title": "Blue Silk Tuxedo",
                        "quantity": 2,
                        "price": "70.00",
                        "image": "files/man-adjusts-blue-tuxedo-bowtie_925x_5844158b-7212-4597-89a9-035d9354e76b.jpg"
                    }
                ]
            },
            {
                "id": "5674892984567",
                "name": "#1001",
                "total_price": "29.50",
                "created_at": "2024-06-01 17:59:25 -0400",
                "order_status_url": "https://flits-support-workplace-18.myshopify.com/69714936055/orders/f6692b255d71d5e1add22b7ba45b825c/authenticate?key=beff48aeb7c4e31540d4068702b8535a",
                "fulfillment_status": "unfulfilled",
                "financial_status": "paid",
                "shipping_price": "0",
                "billing_address": {
                    "address1": "Ahmedpur Kalan Bagmugaliya",
                    "address2": "",
                    "city": "Bhopal",
                    "province": "Madhya Pradesh",
                    "province_code": "MP",
                    "country": "India",
                    "zip": "462026",
                    "first_name": "Pankaj",
                    "last_name": "Vishwakarma"
                },
                "customer_url": "https://flits-support-workplace-18.myshopify.com/account/orders/f6692b255d71d5e1add22b7ba45b825c",
                "item_count": "1",
                "shipping_address": {
                    "address1": "Ahmedpur Kalan Bagmugaliya",
                    "address2": "",
                    "city": "Bhopal",
                    "province": "Madhya Pradesh",
                    "province_code": "MP",
                    "country": "India",
                    "zip": "462026",
                    "first_name": "Pankaj",
                    "last_name": "Vishwakarma"
                },
                "subtotal_price": "2500",
                "tax_price": "450",
                "line_items": [
                    {
                        "title": "Example T-Shirt - Lithograph - Height: 9&quot; x Width: 12&quot;",
                        "quantity": 1,
                        "price": "25.00",
                        "image": "files/green-t-shirt.jpg"
                    }
                ]
            }
        ]
    );

    //Pagination State starts..
    const [page, setPage] = useState(1);
    const addressesPerPage = 3;
    var indexOfLastAddress = page * addressesPerPage;
    var indexOfFirstAddress = indexOfLastAddress - addressesPerPage;
    var currentOrderList = data?.slice(indexOfFirstAddress, indexOfLastAddress);

    //Handling Pagination Change..
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    //Pagination Funtionality ends..

    return (
        <>
            {
                currentOrderList.map((orderinfo) =>
                    <div key={orderinfo.id} className='orderMainContainer'>
                        <div className='orderFirstContainer'>
                            <div>Order: <span className='orderChildContainer'>{orderinfo.name}</span></div>
                            <div>{`Grand Total: `}<span className='grandTotalChildContainer'>{`Rs. ${orderinfo.total_price}`}</span></div>
                        </div>
                        <hr className='brLineStyle' />
                        <div className='orderSecondContainer'>
                            <div>
                                <div className='dateContainer'>{`Date: `}<span className='dateChildContainer'>{`${new Date(orderinfo.created_at).toDateString().split(' ').slice(1).join(' ')}`}</span></div>
                                <div>{`Fulfillment Status: `}<span className='fulfillmentChildContainer'>{`${orderinfo.fulfillment_status}`}</span></div>
                            </div>
                            <div>
                                <div className='itemContainer'>{`Total Items: `}<span className='itemChildContainer'>{`${orderinfo.item_count}`}</span></div>
                                <div>{`Payment: `}<span className='financialStatusChildContainer'>{`${orderinfo.financial_status}`}</span></div>
                            </div>
                        </div>
                        <div className='orderThirdContainer'>
                            <div className='productImgContainer'><img src={`//flits-support-workplace-18.myshopify.com/cdn/shop/${orderinfo.line_items.map((item) => item.image)}`} alt="productImg" width={'70'} /></div>
                            <div className='productDetailContaienr'>
                                <div>{orderinfo.line_items.map((item) => item.title)}</div>
                                <div className='productDetailSubtotalChildContainer'>{`Rs. ${parseInt(orderinfo.subtotal_price) / 100}.00`}</div>
                            </div>
                        </div>
                        <div className='orderBtnContainer' onClick={() => { setOrderId(orderId === '' ? orderinfo.id : '') }}>
                            {
                                // orderId===''?<button type='button' className='orderBtn' >{'View Order'}</button>: orderId===orderinfo.id ? <button type='button' className='orderBtn' >{'Hide Order'}</button> : <button type='button' className='orderBtn' >{'View Order'}</button>
                                <button type='button' className='orderBtn' >{orderId !== orderinfo.id ? 'View Order' : 'Hide Order'}</button>
                            }
                        </div>
                        <div className={orderinfo.id===orderId?'order-details-expand':'order-details-collapse'}>
                            <div className='orderAddParentContainer'>
                                <div className='orderShippingAddContainer'>
                                    <div className='orderShippingAddChildLabelContainer'>Shipping Address</div>
                                    <div className='orderShippingAddChildValueContainer'>{`${orderinfo.shipping_address.first_name} ${orderinfo.shipping_address.last_name}`} <br /> {`${orderinfo.shipping_address.address1}`} <br /> {`${orderinfo.shipping_address.zip} ${orderinfo.shipping_address.city} ${orderinfo.shipping_address.province_code}`} <br /> {`${orderinfo.shipping_address.country}`}</div>
                                </div>
                                <div className='orderBillingAddContainer'>
                                    <div className='orderBillingAddChildLabelContainer'>Billing Address</div>
                                    <div className='orderBillingAddChildValueContainer'>{`${orderinfo.billing_address.first_name} ${orderinfo.billing_address.last_name}`} <br /> {`${orderinfo.billing_address.address1}`} <br /> {`${orderinfo.billing_address.zip} ${orderinfo.billing_address.city} ${orderinfo.billing_address.province_code}`} <br /> {`${orderinfo.billing_address.country}`}</div>
                                </div>
                            </div>
                            <div className='costBreakupParentContainer'>
                                <div className='orderCostBreakupContainer'>{'Cost Breakup'}</div>
                                <div className='orderSubTotalContainer'>
                                    <div>{'Sub Total'}</div>
                                    <div className='fontWeightStyle'>{`Rs. ${parseInt(orderinfo.subtotal_price) / 100}`}</div>
                                </div>
                                <div className='orderIgstContainer'>
                                    <div>{'IGST 18.0%'}</div>
                                    <div className='fontWeightStyle'>{`Rs. ${(parseInt(orderinfo.tax_price) / 100)}`}</div>
                                </div>
                                <div className='orderShippingCostContainer'>
                                    <div>{'Shipping Cost'}</div>
                                    <div className='fontWeightStyle'>{`Rs. ${orderinfo.shipping_price}`}</div>
                                </div>
                                <div className='orderGrandTotalContainer'>
                                    <div>{'Grand Total'}</div>
                                    <div className='fontWeightStyle'>{`Rs. ${orderinfo.total_price}`}</div>
                                </div>
                                <div className='orderPaymentTypeContainer'>
                                    <div>{'Payment Type'}</div>
                                    <div className='fontWeightStyle'>{`${orderinfo.payment_type}`}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            <div className="paginationContainer">
                <div>
                    {
                        data?.length > 3 &&
                        <Container>
                            <Pagination
                                count={Math.ceil(data?.length / addressesPerPage)}
                                page={page}
                                onChange={handleChangePage}
                            />
                        </Container>
                    }
                </div>
            </div>
        </>
    )
}