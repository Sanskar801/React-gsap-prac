import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import React from 'react'

export default function GsapTimeline() {

    const timeline = gsap.timeline({
        repeat: -1, repeatDelay: 1, yoyo: true
    });

    useGSAP(() => {
        timeline.to('.redBox', {
            x: 250,
            rotation: 360,
            borderRadius: '100%',
            duration: 1,
            ease: "back.out"
        })
    },[]);

  return (
    <section>
      <h2>TimeLine</h2>
      <div className="container">
        <div className='redBox'>Box</div>
      </div>
    </section>
  )
}
