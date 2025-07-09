import React from 'react'
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function GsapScrollTrigger() {

    const scrollRef = useRef();

    useGSAP(() => {
        const boxes = gsap.utils.toArray(scrollRef.current.children);

        boxes.forEach((box) => {
            gsap.to(box, {
                x: 150 * (boxes.indexOf(box) + 5) ,
                rotation: 360,
                borderRadius: '100%',
                scale: 1.5,
                scrollTrigger: {
                    trigger: box,
                    start: 'bottom bottom',
                    end: 'top 20%',
                    scrub: true
                },
                ease: 'power1.inOut'
            });
        });
    }, {scope: scrollRef});

  return (
    <section>
        <h2>Scroll Trigger</h2>
        <div className="container" ref={scrollRef}>
            <div className="redBox"></div>
            <div className="blueBox"></div>
            <div className="box"></div>
        </div>
    </section>
  )
}
