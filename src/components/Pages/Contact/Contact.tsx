import React, { useEffect, useRef } from 'react';
import { Parallax } from '../../Common/parallax';

export default function Contact() {
    const section = useRef(null);

    useEffect(() => {
        new Parallax({
            element: [section.current]
        });
    }, []);

    return (
        <section id="contact" className="contact" ref={section}>
            <h1>Contact</h1>
        </section>
    )
}
