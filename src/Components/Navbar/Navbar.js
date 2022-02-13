import React from 'react'
import './navbar.css'

import NavItem from './NavItem'

const navLinks = [
    {
        name:"Home",
        link:"/"
    },
    {
        name:"",
        link:"/"
    }
]

const Navbar = () => {
    return (
        <div className="navContainer" >

            <div className="navRight">
            <NavItem />
            <NavItem />
            <NavItem />
            <NavItem />
            <NavItem />
            </div>
        
        </div>
    )
}

export default Navbar
