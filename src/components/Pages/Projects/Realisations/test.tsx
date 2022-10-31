import { useState, useEffect } from 'react';
import { DataRealisationsTest } from '../../../Common/data';

export default function RealisationsTest() {
    const [data, setData] = useState(Array);

    useEffect(() => {
        setData(DataRealisationsTest);
    }, []);

    return (
        <ul className="realisationsTest">
            {
                data.length > 0 &&
                data.map((e: any, id) => {
                    return (
                        <li key={id}>
                            <div className="ProjectThumbnail_text">
                                <h1>{e.title}</h1>
                                <h3>{e.date}</h3>
                                <p>{e.description}</p>
                                <a href={e.url} target="_blank" rel="noreferrer">Jeter un coup d'oeil</a>
                            </div>
                            <figure className="ProjectThumbnail_figure">
                                <video loop muted >
                                    <source type="video/mp4" src={require(`../../../../assets/video/${e.video}`).default} />
                                </video>
                            </figure>
                        </li>
                    )
                })
            }
        </ul>
    )
}
