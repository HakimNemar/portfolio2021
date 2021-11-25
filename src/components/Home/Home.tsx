import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Intro from '../Pages/Intro/Intro';
import Competence from '../Pages/Competence/Competence';
import Projects from '../Pages/Projects/Projects';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Footer from '../Footer/Footer';

export default function Index() {
    const mousemove = () => {
        const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor?.setAttribute('style', `top:${e.pageY - 7}px; left:${e.pageX - 7}px`);
        });
    }

    useEffect(() => {
        mousemove();

        document.addEventListener('scroll', (e) => {
            mousemove();
        });
    }, []);

    return (
        <>
            <Header />

            <Intro />

            <Competence />

            <Projects />

            <About />

            <Contact />

            <Footer />
        </>
    )
}
