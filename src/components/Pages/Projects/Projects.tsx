import React, { useEffect, useRef } from 'react';
import { Parallax } from '../../Common/parallax';
import Realisations from './Realisations/Realisations';

// creer function qui creer un projets pour l'afficher ici en bouclant dessus cme thebuyer 
// passer un tableau d'objet a l'appel du component pour boucler ici et afficher tout les projet dans ce module

export default function Projects() {
    const section = useRef(null);

    useEffect(() => {
        new Parallax({
            element: [section.current]
        });
    }, []);

    return (
        <section id="projets" className="projets" ref={section}>
            <div className="titleGroup">
                <h1 className="title">Projets</h1>
                <h2 className="title2">Mes réalisations</h2>
            </div>

            <Realisations />

            {/* Mes contributions */}
        </section>
    )
}
