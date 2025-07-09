import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'

export default function GsapStagger() {

    useGSAP(() => {
        gsap.to('.stagger-box', {
            y: 300,
            rotation: 90,
            borderRadius: '100%',
            repeat: -1,
            yoyo: true,

            stagger: {
                amount: 1.5,
                ease: 'bounce'
            }
        })
    });


  return (
    <section>
      <h2>Stagger</h2>
      <div className="slide">
        <div className="redBox stagger-box"></div>
        <div className="redBox stagger-box"></div>
        <div className="redBox stagger-box"></div>
        <div className="redBox stagger-box"></div>
      </div>
    </section>
  )
}
