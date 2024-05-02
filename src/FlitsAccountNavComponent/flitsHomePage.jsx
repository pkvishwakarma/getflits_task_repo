import React from 'react';
import './navbar.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import MyProfile from './myprofile';
import DeliveryAdd from './deliveryAdd';
import MyOrder from './myOrders';
import TopOrderedProduct from './topOrderedProduct';
import MyWishlist from './myWishlist';
import MyCredit from './myCredit';
import HowToManageCredit from './howToManageCredit';
import ChangePassword from './changePassword';

export default function FlitsHomePage() {
    return (
        <>
            <div className='homepageHeading'>Welcome to our store</div>
            <div className='headerContainer'>
                <div className='headerTitle'>flits-support-workplace-15</div>
                <div className='optionContainer'>
                    <span className='home'>Home</span><span className='catelog'>Catelog</span><span className='contact'>Contact</span>
                </div>
                <div className='iconsContainer'>
                    <span className='searchIcon'>Search</span><span className='userIcon'>User</span><span className='cartIcon'>Cart</span>
                </div>
            </div>
            <Routes>
                <Route path='/' element={<Navbar />}>
                    <Route path='myprofile' element={<MyProfile />} />
                    <Route path='delivery' element={<DeliveryAdd />} />
                    <Route path='myorder' element={<MyOrder />} />
                    <Route path='toporderedproduct' element={<TopOrderedProduct />} />
                    <Route path='mywishlist' element={<MyWishlist />} />
                    <Route path='mycredit' element={<MyCredit />} />
                    <Route path='managecredit' element={<HowToManageCredit />} />
                    <Route path='changepassword' element={<ChangePassword />} />
                </Route>

            </Routes>
        </>
    )
}