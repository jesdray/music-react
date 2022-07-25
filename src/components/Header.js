import React from "react";
import logo from "../images/logo.svg"

export default function Header() {

    return (
        <header className="header">
            <img className="header__logo" src={logo} />
            <div className="header__user">
                <img className="header__user-avatar" src="https://i.pinimg.com/736x/fb/5e/63/fb5e63c1356eeeccd3da4536faf26aaf.jpg" alt="Картинка"></img>
                <p className="header__user-name">Никнейм</p>
                <button className="header__sattings">Настройки</button>
            </div>
        </header>
    )
}