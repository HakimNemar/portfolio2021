import React, { useEffect, useState, useRef } from 'react';
import { Parallax } from '../../Common/parallax';
import { ScrollTitle } from '../../Common/scrollTitle';
// import emailjs from 'emailjs-com';

export default function Contact() {
    const section = useRef(null);
    const title = useRef(null);

    const [form, setForm] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isReady, setIsReady] = useState(false);
    const [isInvalid, setIsInvalid]: any = useState(false);

    function sendEmail(e: any) {
        e.preventDefault();
        let invalids = {} as any;

        if (name === "" || name === null) {
            invalids.name = "Veuillez entrez votre nom correctement";
        }
        if (email === "" || email === null) {
            invalids.email = "Veuillez entrez votre email correctement";
        }
        if (message === "" || message === null) {
            invalids.message = "Veuillez entrez un message correctement";
        }

        if (Object.keys(invalids).length === 0) {
            setIsInvalid(invalids);
            setForm(e.target);
            setIsReady(true);
        } else {
            setIsInvalid(invalids);
        }
    }

    useEffect(() => {
        if (isReady) {
            // setIsReady(false);
            // emailjs.sendForm('gmail', 'template_kuMy2OpZ', form, 'user_5VwJPxWIJ4W9EYRUBTIdl').then((result) => {
            //     $("#name").val("");
            //     $("#email").val("");
            //     $("#message").val("");
            //     setName("");
            //     setEmail("");
            //     setMessage("");
            //     setForm("");
            //     console.log('good', result.text);
            // }, (error) => {
            //     console.log('bad', error.text);
            // });
            console.log(form);
        }
        console.log(isInvalid);


    }, [isReady, form]);

    useEffect(() => {
        new Parallax({
            element: [section.current]
        });
        new ScrollTitle(
            title.current
        )
    }, []);

    return (
        <section id="contact" className="contact" ref={section}>

            <div className="titleGroup">
                <h1 className="title" ref={title}><span className='text'>Contact</span></h1>
                <h2 className="title2">Le début d'une collaboration ?</h2>
            </div>

            <form onSubmit={sendEmail}>
                <div className="my-5">
                    <div className="input-field ">
                        <input id="name" type="text" className={"validate " + (isInvalid.name && "invalid is-invalid")} name="name" placeholder='Nom' onChange={(e) => setName(e.target.value)} />
                        {/* <label htmlFor="name" className="labelContact">Nom</label> */}
                        <span className='required'>*</span>
                    </div>
                    <div className={"invalid-feedback " + (isInvalid.name !== undefined ? 'alerte' : '')}>{isInvalid.name}</div>

                    <div className="input-field">
                        <input id="email" type="email" className={"validate " + (isInvalid.email && "invalid is-invalid")} name="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                        {/* <label htmlFor="email" className="labelContact">Email</label> */}
                        <span className='required'>*</span>
                    </div>
                    <div className={"invalid-feedback " + (isInvalid.email !== undefined ? 'alerte' : '')}>{isInvalid.email}</div>

                    <div className="input-field">
                        <textarea id="message" typeof="text" className={"materialize-textarea validate " + (isInvalid.message && "invalid is-invalid")} name="message" placeholder='Message' onChange={(e) => setMessage(e.target.value)} />
                        {/* <label htmlFor="message" className="labelContact">Message</label> */}
                        <span className='required'>*</span>
                    </div>
                    <div className={"invalid-feedback " + (isInvalid.message !== undefined ? 'alerte' : '')}>{isInvalid.message}</div>

                </div>
                <input className="send" type="submit" value="Envoyer" />
            </form>
        </section>
    )
}
