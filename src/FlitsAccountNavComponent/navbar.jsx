import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './navbar.css';
import { useSelector } from 'react-redux';

export default function Navbar() {
    //navigation List Object Data State.
    const navListObj=[{
        myprofile:{link:'myprofile',text:'My Profile'},
        delivery:{link:'delivery',text:'Delivery Address'},
        myorder:{link:'myorder',text:'My Orders'},
        toporderedproduct:{link:'toporderedproduct',text:'Top Ordered Products'},
        mywishlist:{link:'mywishlist',text:'My Wishlist'},
        mycredit:{link:'mycredit',text:'My Credits'},
        managecredit:{link:'managecredit',text:'How To Manage Credits'},
        changepassword:{link:'changepassword',text:'Change Password'}
    }]
    var deliveryAddData = (useSelector((state) => state.deliveryData.deliveryAddCollection));
    return (
        <>
            <div className='navContainer'>
                <nav className='navbar_navigation_Container'>
                    <ul>
                        {/* Iterating state to present Nav Lists */}
                        {
                            navListObj.map((list)=>
                            Object.keys(list).map((navlist)=>
                                <NavLink key={list[navlist].link} to={`/${list[navlist].link}`} className='linkStyle'>{list[navlist].link==='delivery'?<li>{list[navlist].text} <span className='deliveryLength'>{deliveryAddData[0]?.length}</span></li>:<li>{list[navlist].text}</li>}</NavLink>
                             ))
                        }
                        <li>Log Out</li>
                    </ul>
                </nav>
                <div className='navigation_Outlet_Container'><Outlet /></div>
            </div>
        </>
    )
}