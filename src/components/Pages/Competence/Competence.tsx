import React, { useEffect, useRef } from 'react';
import { Parallax } from '../../Common/parallax';

export default function Competence() {
    const section = useRef(null);

    // Animation ajouter un petit bonome qui pousse la skillbar de frontend

    useEffect(() => {
        new Parallax({
            element: [section.current]
        });
    }, []);

    return (
        <section id="competence" className="competence" ref={section}>
            <h1>Mes Compétences à votre service</h1>
            <div className='skill'>
                <div className="skillDiv">
                    <h2>Wordpress</h2>
                    <div className="skillBar">
                        <div className="progress1"></div>
                    </div>
                </div>
                <div className="skillDiv">
                    <h2>Frontend</h2>
                    <h3>React, JavaScript & TypeScript, SASS, jQuery, HTML, CSS, Bootstrap</h3>
                    <div className="skillBar">
                        <div className="progress2"></div>
                    </div>
                </div>
                <div className="skillDiv">
                    <h2>Backend</h2>
                    <h3>PHP, Node JS, Express JS, Symfony, Laravel, Socketio</h3>
                    <div className="skillBar">
                        <div className="progress3"></div>
                    </div>
                </div>
                <div className="skillDiv">
                    <h2>Autres</h2>
                    <h3>Git, Github & Gitlab, MySQL, Serveur</h3>
                    <div className="skillBar">
                        <div className="progress4"></div>
                    </div>
                </div>
            </div>
            <div className="skillDetails">
                <div className="skillDiv">
                    <h2>Web Master</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, quos! Beatae temporibus reiciendis commodi.</p>
                </div>
                <div className="skillDiv">
                    <h2>Gestion de projet web</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nemo dolorum, architecto culpa nulla dolore officia officiis explicabo deserunt veritatis.</p>
                </div>
            </div>
        </section>
    )
}
