import React, { useState, useEffect, useRef } from 'react';
import { DataParcours } from '../../../Common/data';
// import { Parallax } from '../../../Common/parallax';

export default function Timeline() {
    const [data, setData] = useState(Array);
    const box = useRef(null);

    useEffect(() => {
        setData(DataParcours);

        // new Parallax({
        //     element: [box.current]
        // });

        console.log(box.current);

    }, []);

    return (
        <div className="timline">
            <div className="line"></div>

            {
                data.length > 0 &&
                data.map((e: any, id) => {
                    let key = id + 1;

                    return (
                        <div key={id} className="cart">
                            <div className={"box b" + key} data-anim={key} ref={box}>
                                {e.date &&
                                    <h6 className="date">{e.date}</h6>
                                }
                                <h2 className="title">{e.title}</h2>
                                {e.entreprise ?
                                    <h3 className="entreprise">
                                        {e.entreprise}
                                        {e.contrat &&
                                            <span className="contrat"> - {e.contrat}</span>
                                        }
                                    </h3>
                                    :
                                    <br />
                                }
                                {e.ecole ?
                                    <h3 className="ecole">{e.ecole}</h3>
                                    :
                                    <br />
                                }
                            </div>
                            <div className={"rond r" + key} data-anim={key}></div>
                        </div>
                    )
                })
            }
        </div >
    )
}
