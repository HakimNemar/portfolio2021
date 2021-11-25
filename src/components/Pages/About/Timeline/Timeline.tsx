import React, { useState, useEffect, useRef } from 'react';
import { DataParcours } from '../../../Common/data';

export default function Timeline() {
    const [data, setData] = useState(Array);

    useEffect(() => {
        setData(DataParcours);
    }, []);

    return (
        <div className="timline">
            <div className="line"></div>

            {/* 
            <div className="rond r1" data-anim="1"></div>
            <div className="rond r2" data-anim="2"></div>
            <div className="rond r3" data-anim="3"></div>
            <div className="rond r4" data-anim="4"></div>

            <div className="box b1" data-anim="1"><h2>test</h2></div>
            <div className="box b2" data-anim="2"><h2>test</h2></div>
            <div className="box b3" data-anim="3"><h2>test</h2></div>
            <div className="box b4" data-anim="4"><h2>test</h2></div> */}

            {
                data.length > 0 &&
                data.map((e: any, id) => {
                    let key = id + 1;

                    return (
                        <div key={id} className="cart">
                            <div className={"box b" + key} data-anim={key}>
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
