import React, { useEffect } from 'react';
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

    // let observer = new IntersectionObserver(function (observables) {
    //     observables.forEach((observable) => {
    //         if (observable.intersectionRatio > 0.5) {
    //             observable.target.classList.add("visible");
    //             // observer.unobserve(observable.target);
    //         } else {
    //             observable.target.classList.remove("visible");
    //         }
    //     })
    // }, {
    //     threshold: [0.5]
    // });

    // let items = document.querySelectorAll("#root section");
    // items.forEach(function (item) {
    //     console.log(item);

    //     item.classList.remove("visible");
    //     observer.observe(item);
    // });

    useEffect(() => {
        let headerLi = (document.querySelectorAll("#header .head > ul li")),
            observer = new IntersectionObserver(function (observables) {
                observables.forEach((observable) => {
                    if (observable.intersectionRatio > 0.5) {
                        headerLi.forEach((li) => {
                            if (li.textContent === observable.target.id || li.textContent === "à propos" && observable.target.id === "about") {
                                li.classList.add("active");
                            } else {
                                li.classList.remove("active");
                            }
                        });
                    } else {
                        // observable.target.classList.remove("active");
                    }
                })
            }, {
                threshold: [0.5]
            });

        let items = document.querySelectorAll("#root section");

        items.forEach(function (item) {
            headerLi.forEach((li) => {
                li.classList.remove("active");
            });
            observer.observe(item);
        });
    }, []);

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
