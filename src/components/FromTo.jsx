import React, { useRef } from 'react'
import './FromTo.module.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function FromTo() {

    const container = useRef();

    useGSAP(() => {
        gsap.from(".box", {
            rotate: 360,
            scale: 0,
            opacity: 0,
            delay: 1,
            duration: 1
        })
    }, { scope: container })

    return (
        <section>
            <div className="container" ref={container}>
                <div className="box">Box 1</div>
                <div className="circle">Circle 1</div>
            </div>
        </section>
    )
}
