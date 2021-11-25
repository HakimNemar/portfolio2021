import React, { useRef, useEffect } from 'react';
import { Parallax } from '../../Common/parallax';

export default function Intro() {
    const blend = useRef(null);
    const section = useRef(null);

    useEffect(() => {
        new Parallax({
            element: [
                blend.current,
                section.current
            ],
        });
    }, []);

    return (
        <section id="intro" className="intro" ref={section}>
            <div id="blend" className="blend" ref={blend}></div>
            <h1>
                <div>
                    <div className="first">Développeur</div>
                </div>
                <div>
                    <div className="seconde">Full Stack.</div>
                </div>
            </h1>
            <h3>Bienvenue sur mon Portfolio ! Réalisée en 2021 par mes soins</h3>
        </section>
    )
}
