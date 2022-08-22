import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {

    return (
        <nav className="nav">
            <NavLink to='/' className='nav__link'>Мой профиль</NavLink>
            <NavLink to='/' className='nav__link'>Музыка</NavLink>
            <NavLink to='/' className='nav__link'>Плейлисты</NavLink>
            <NavLink to='/settings' className='nav__link'>Настройки</NavLink>
        </nav>
    )
}