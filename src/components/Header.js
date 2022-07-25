import React from "react";

export default function Header() {

    return (
        <header className="header">
            <div className="header__box">
                <h1 className="header__logo" >Music</h1>
                <div className="header__user">
                    <img className="header__user-avatar" src="http://almode.ru/uploads/posts/2021-12/1639128648_43-almode-ru-p-devushki-vnovodnikh-platyakh-46.jpg" alt="Картинка"></img>
                    <button className="header__settings"></button>
                    <menu className="header__menu">
                        <ul className="header__ul">
                            <li className="header__li">asdasd</li>
                            <li className="header__li">asdasdasd</li>
                            <li className="header__li">asdasdasdasadsda</li>
                        </ul>
                    </menu>
                </div>
            </div>
        </header>
    )
}