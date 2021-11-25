import React from 'react';
import Menu from '../Menu/Menu';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';

export default function Header() {
    return (
        <header id="header" className="header">
            <div className="logo">
                <Logo />
            </div>

            <Menu />
        </header>
    )
}
