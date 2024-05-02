import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
    return (
        <>
            <div className='navContainer'>
                <nav className='navbar_navigation_Container'>
                    <ul>
                        <NavLink className='linkStyle' to={'myprofile'} ><li>My Profile</li></NavLink>
                        <NavLink className='linkStyle' to={'delivery'} ><li>Delivery Address</li></NavLink>
                        <NavLink className='linkStyle' to={'myorder'} ><li>My Orders</li></NavLink>
                        <NavLink className='linkStyle' to={'toporderedproduct'} ><li>Top Ordered Products</li></NavLink>
                        <NavLink className='linkStyle' to={'mywishlist'} ><li>My Wishlist</li></NavLink>
                        <NavLink className='linkStyle' to={'mycredit'} ><li>My Credits</li></NavLink>
                        <NavLink className='linkStyle' to={'managecredit'} ><li>How To Manage Credits</li></NavLink>
                        <NavLink className='linkStyle' to={'changepassword'} ><li>Change Password</li></NavLink>
                        <li>Log Out</li>
                    </ul>
                </nav>
                <div className='navigation_Outlet_Container'><Outlet /></div>
            </div>
        </>
    )
}