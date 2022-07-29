import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {

    return (
        <nav className="nav">
            <NavLink to='/' className='nav__link nav__link-active'>Мой профиль</NavLink>
            <NavLink to='/' className='nav__link'>Моя музыка</NavLink>
        </nav>
    )
}