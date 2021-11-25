import React, { useRef, useEffect, useState } from 'react'
import BtnMenu from '../BtnMenu/BtnMenu';

export default function Menu() {
    const menu = useRef<HTMLDivElement>(null);
    const [themenu, setTthemenu] = useState<any>(null);
    const menuLinks = [
        // un objet, url et nom
        'competence',
        'projets',
        'about',
        'contact'
    ];

    useEffect(() => {
        setTthemenu(menu.current);
    }, [])

    return (
        <>
            <BtnMenu menu={themenu} />

            <div className='menu' id="menu" ref={menu}>
                <ul>
                    {menuLinks.map((element, id) => {
                        return <li key={id}><a href={`#${element}`}>{element}</a></li>
                    })}
                </ul>
            </div>
        </>
    )
}
