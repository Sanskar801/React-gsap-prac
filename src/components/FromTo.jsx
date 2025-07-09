import React, { useRef, useState } from 'react'
import './FromTo.module.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function FromTo() {

    const container = useRef();
    const boxRef = useRef();
    const [xPostion, setXPosition] = useState(0);
    const [yPosition, setYPosition] = useState(0);
    const [rotationValue, setRotationValue] = useState(0);

    const randomXValue = gsap.utils.random(0, 250, 50);
    const randomYValue = gsap.utils.random(0, 250, 50);
    const randomRValue = gsap.utils.random(0, 800, 50);

    useGSAP(() => {
        gsap.to(boxRef.current, {
            x: xPostion,
            y: yPosition,
            duration: 1,
            rotate: rotationValue,
            ease: "circ.out"
        });
    }, { dependencies: [xPostion, yPosition, rotationValue], revertOnUpdate: true });

    // useGSAP(() => {
    //     gsap.from(".box", {
    //         rotate: 360,
    //         scale: 0,
    //         opacity: 0,
    //         delay: 1,
    //         duration: 1
    //     })
    // }, { scope: container })

    return (
        <section>
            <h2>From To</h2>
            <div className="container" ref={container}>
                <div className="box" ref={boxRef}>Box 1</div>
                {/* <div className="circle">Circle 1</div> */}
                <button
                    className='btn'
                    onClick={() => {
                        setXPosition(randomXValue)
                        setYPosition(randomYValue)
                        setRotationValue(randomRValue)
                    }}>Move</button>
            </div>
        </section>
    )
}
