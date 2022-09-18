import React from 'react';
import Menu from '../Menu/Menu';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import background from "../../assets/img/header/test.jpeg";

export default function Header() {
    const menuLinks = [
        {
            title: 'competences',
            // img: '../../assets/img/header/test.jpeg'
        }, {
            title: 'projets',
            // img: ''
        }, {
            title: 'about',
            // img: ''
        }, {
            title: 'contact',
            // img: ''
        }
    ];

    return (
        <header id="header" className="header">
            <div className='head'>
                <div className="logo">
                    <Logo />
                </div>

                <Menu />

                <ul className='nav'>
                    {menuLinks.map((element, id) => {
                        return (
                            <li key={id}>
                                <a href={`#${element.title}`} style={{ backgroundImage: `url(${require(`../../assets/img/header/` + element.title + '.jpeg').default})` }}>
                                    {element.title === "about" ? "à propos" : element.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </header>
    )
}
