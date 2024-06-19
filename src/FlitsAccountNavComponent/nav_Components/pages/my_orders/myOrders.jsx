import React, { useState } from 'react';
import './myOrder.css';
import { Container, Pagination } from '@mui/material';
import ContactForm from './contact_form';

export default function MyOrder() {
    const [orderId, setOrderId] = useState('');
    const [data] = useState(window.allorders ||
        [
            {
                "id": "5693188342007",
                "name": "#1007",
                "total_price": "424.80",
                "created_at": "2024-06-14 18:01:29 -0400",
                "order_status_url": "https://flits-support-workplace-18.myshopify.com/69714936055/orders/cc11e2171bb31f15211454e571cdb04d/authenticate?key=10a5e7f19293c38da56a659ccfe2de3a",
                "fulfillment_status": "fulfilled",
                "financial_status": "paid",
                "shipping_price": "0",
                "cancelled_at": "",
                "cancelled": "false",
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
                "customer_url": "https://flits-support-workplace-18.myshopify.com/account/orders/cc11e2171bb31f15211454e571cdb04d",
                "item_count": "6",
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
                "transactions": [
                    {
                        "id": "6793072541943",
                        "gateway": "bogus"
                    }
                ],
                "subtotal_price": "36000",
                "tax_price": "6480",
                "line_items": [
                    {
                        "id": "14154499195127",
                        "variant_id": "44943500214519",
                        "title": "Red Sports Tee",
                        "quantity": 1,
                        "price": "50.00",
                        "image": "files/womens-red-t-shirt_925x_59b0fe02-693a-433e-adfa-8ad4dc03938e.jpg",
                        "fulfillment": {
                            "tracking_company": "Amazon Logistics UK",
                            "tracking_number": "123456"
                        }
                    },
                    {
                        "id": "14154499227895",
                        "variant_id": "44943499755767",
                        "title": "Striped Silk Blouse",
                        "quantity": 3,
                        "price": "50.00",
                        "image": "files/striped-blouse-fashion_925x_bab6e1b7-95f4-4525-a20e-94681e0136a3.jpg",
                        "fulfillment": {
                            "tracking_company": "Amazon Logistics UK",
                            "tracking_number": "123456"
                        }
                    },
                    {
                        "id": "14154499260663",
                        "variant_id": "44943499788535",
                        "title": "Classic Leather Jacket",
                        "quantity": 2,
                        "price": "80.00",
                        "image": "files/leather-jacket-and-tea_925x_353c4f99-7596-477a-8beb-f1e5ed4f169d.jpg",
                        "fulfillment": {
                            "tracking_company": "Amazon Logistics UK",
                            "tracking_number": "123456"
                        }
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
                "cancelled_at": "",
                "cancelled": "false",
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
                "transactions": [
                    {
                        "id": "6780787720439",
                        "gateway": "bogus"
                    }
                ],
                "subtotal_price": "14000",
                "tax_price": "2520",
                "line_items": [
                    {
                        "id": "14137287901431",
                        "variant_id": "44943500181751",
                        "title": "Blue Silk Tuxedo",
                        "quantity": 2,
                        "price": "70.00",
                        "image": "files/man-adjusts-blue-tuxedo-bowtie_925x_5844158b-7212-4597-89a9-035d9354e76b.jpg",
                        "fulfillment": {
                            "tracking_company": "",
                            "tracking_number": ""
                        }
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
                "financial_status": "refunded",
                "shipping_price": "0",
                "cancelled_at": "2024-06-13 18:03:41 -0400",
                "cancelled": "true",
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
                "transactions": [
                    {
                        "id": "6767500722423",
                        "gateway": "bogus"
                    },
                    {
                        "id": "6791129989367",
                        "gateway": "bogus"
                    }
                ],
                "subtotal_price": "2500",
                "tax_price": "450",
                "line_items": [
                    {
                        "id": "14117942034679",
                        "variant_id": "44938206576887",
                        "title": "Example T-Shirt - Lithograph - Height: 9&quot; x Width: 12&quot;",
                        "quantity": 1,
                        "price": "25.00",
                        "image": "files/green-t-shirt.jpg",
                        "fulfillment": {
                            "tracking_company": "",
                            "tracking_number": ""
                        }
                    }
                ]
            }
        ]
    );

    //Managing Contact-us Form using State and Function Starts..
    const [showForm, setShowForm] = useState(false);
    const handleShowForm = () => setShowForm(true);
    const handleCloseForm = () => setShowForm(false);
    //Contact-us Form Function Ends..

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

    //Re-order Functionality Starts..
    async function handleReorderClick(e, reOrderDetail) {
        e.preventDefault();
        // console.log(reOrderDetail);
        let formData = {
            "items": []
        };
        formData.items.push(reOrderDetail.map((item) => item));
        const addItemsToCart = async () => {
            for (const item of formData.items[0]) {
              await fetch('/cart/add.js', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                },
                body: JSON.stringify(item)
              });
            }
            
            // Redirect to cart after adding items
            window.location.href = `https://${window.location.host}/cart`;
          };
        
          addItemsToCart();
    };
    //Re-order Functionality Ends..

    return (
        <>
            {
                currentOrderList.map((orderinfo, ind) =>
                    <div key={orderinfo.id} className='orderMainContainer'>
                        <div className='orderFirstContainer'>
                            <div>Order: <span className='orderChildContainer'>{orderinfo.name}</span></div>
                            <div>{`Grand Total: `}<span className='grandTotalChildContainer'>{`Rs. ${orderinfo.total_price}`}</span></div>
                        </div>
                        <hr className='brLineStyle' />
                        <div className='orderSecondContainer'>
                            <div>
                                <div className='dateContainer'>{`Date: `}<span className='dateChildContainer'>{`${new Date(orderinfo.created_at).toDateString().split(' ').slice(1).join(' ')}`}</span></div>
                                <div>
                                    {
                                        orderinfo.cancelled === "true" ? <div>{`Cancelled at: `}<span className='fulfillmentChildContainer'>{`${new Date(orderinfo.cancelled_at).toDateString().split(' ').slice(1).join(' ')}`}</span></div> : <div>{`Fulfillment Status: `}<span className='fulfillmentChildContainer'>{`${orderinfo.fulfillment_status}`}</span></div>
                                    }
                                </div>
                            </div>
                            <div>
                                <div className='itemContainer'>{`Total Items: `}<span className='itemChildContainer'>{`${orderinfo.line_items.length}`}</span></div>
                                <div>{`Payment: `}<span className='financialStatusChildContainer'>{`${orderinfo.financial_status}`}</span></div>
                            </div>
                        </div>
                        {
                            orderinfo.line_items.map((item) =>
                                <div className='orderThirdContainer' key={item.id}>
                                    <div className='productImgContainer'><
                                        img src={`//flits-support-workplace-18.myshopify.com/cdn/shop/${item.image}`} alt="productImg" width={'70'} />
                                        <span className='orderLineItemLength'>{item?.quantity}</span>
                                    </div>
                                    <div className='productDetailContainer'>
                                        <div>{item.title}</div>
                                        <div className='productDetailSubtotalChildContainer'>{`Rs. ${item.price}`}</div>
                                        <div className='orderTrackingInfoParentContainer'>
                                            {item.fulfillment.tracking_company &&
                                                <div style={{ display: "flex", marginRight: '1em' }}>
                                                    <div>{'Tracking Company :'}</div>
                                                    <div style={{ fontWeight: '700', marginLeft: '0.5em' }}>{`${item.fulfillment.tracking_company}`}</div>
                                                </div>
                                            }
                                            {item.fulfillment.tracking_number &&
                                                <div style={{ display: "flex" }}>
                                                    <div>{'Tracking Number :'}</div>
                                                    <div style={{ fontWeight: '700', marginLeft: '0.5em' }}>{`${item.fulfillment.tracking_number}`}</div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className='btnParentContainer'>
                            <button type='button' className="contactBtn" onClick={handleShowForm}>Contact Us</button>
                            <div className='orderBtnContainer' onClick={() => { setOrderId(orderId === '' ? orderinfo.id : '') }}>
                                {
                                    // orderId===''?<button type='button' className='orderBtn' >{'View Order'}</button>: orderId===orderinfo.id ? <button type='button' className='orderBtn' >{'Hide Order'}</button> : <button type='button' className='orderBtn' >{'View Order'}</button>
                                    <button type='button' className='orderBtn' >{orderId !== orderinfo.id ? 'View Order' : 'Hide Order'}</button>
                                }
                            </div>
                            <button type='submit' className='reOrderBtn' onClick={(e) => { handleReorderClick(e, orderinfo.line_items.map((item) => { return { id: parseInt(item.variant_id), quantity: item.quantity } })) }}>Re-order</button>
                        </div>
                        <div className={orderinfo.id === orderId ? 'order-details-expand' : 'order-details-collapse'}>
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
                                    {
                                        orderinfo.transactions.map((transaction, ind) =>
                                            ind === 0 && <div key={transaction.id} className='fontWeightStyle'>{`${transaction.gateway}`}</div>
                                        )
                                    }
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
            <ContactForm show={showForm} handleClose={handleCloseForm} />
        </>
    )
}