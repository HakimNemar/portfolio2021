import { DataParcours } from '../../../Common/data';
import { useState, useEffect } from 'react';

export default function Carousel() {
    const [data, setData] = useState(Array);

    useEffect(() => {
        setData(DataParcours.reverse());
    }, []);

    return (
        <div className="carousel">
            {
                data.length > 0 &&
                data.map((e: any, id) => {
                    let key = id + 1;

                    return (
                        <div key={id} className={"cart" + (id === 0 ? " active" : "")} data-cursor-hover>
                            <div className={"box b" + key} id={"b" + key} data-anim={key} >
                                <div>
                                    <h2 className="title">{e.title}</h2>
                                </div>

                                <hr />
                                {e.date &&
                                    <h3 className="date">{e.date}</h3>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}