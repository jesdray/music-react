import React from "react";
import { NavLink } from "react-router-dom";
import ClickAwayListener from "react-click-away-listener";
import { useDispatch, useSelector } from "react-redux";


import Player from "./Player";
import { data } from "../utils/utils"

export default function Header() {
    const dispatch = useDispatch()
    const darkThem = useSelector(state => state.darkThem)
    const [menuOpen, setMenuOpen] = React.useState(false);
    const menuClass = menuOpen ? "header__menu header__menu_active" : "header__menu";

    function openCloseMenu() {
        setMenuOpen(!menuOpen);
    }

    function closeMenu(e) {
        if (e.target.className !== "header__settings" & menuOpen) {
            setMenuOpen(false)
        }
    }

    return (
        <header className="header">
            <div className="header__box header__box-big">
                <div className="header__box header__box-small">
                    <NavLink to="/" className="header__logo" ><span className="header__span">Hot-</span>Music</NavLink>
                    <Player
                        key='1'
                        music={data.music}
                    />
                </div>
                <div className="header__user">
                    <img className="header__user-avatar" src="https://catherineasquithgallery.com/uploads/posts/2021-02/1613449390_71-p-fon-dlya-prezentatsii-pro-vulkani-91.jpg" alt="Картинка"></img>
                    <button className="header__settings" onClick={openCloseMenu}></button>
                    <ClickAwayListener onClickAway={closeMenu}>
                        <menu className={menuClass}>
                            <button className="header__menu-btn">
                                Тема <span className="header__span">{darkThem ? 'Темная' : 'Светлая'}</span>
                            </button>
                            <NavLink to='/settings' className="header__menu-link">Настройки</NavLink>
                        </menu>
                    </ClickAwayListener>
                </div>
            </div>
        </header>
    )
}