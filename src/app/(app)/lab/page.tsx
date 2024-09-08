'use client'

import './page.css'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import Image from 'next/image'
import { useRef, useState } from 'react'

import { hours, imagesSlide } from './page-utils'

gsap.registerPlugin(CustomEase)

CustomEase.create(
  'hop',
  'M0,0 C0.083,0.294 0.117,0.767 0.413,0.908 0.606,1 0.752,1 1,1',
)

export default function Lab() {
  const container = useRef(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const duration = 1.5

  const tl = useRef(gsap.timeline({ paused: true }))

  function handleTimelineClick(index: number) {
    if (isAnimating) return

    setIsAnimating(true)

    const timelines = document.querySelectorAll('.timeline p')

    timelines.forEach((element, idx) => {
      let flexGrow, width, color

      if (idx === index) {
        flexGrow = 5
        width = 'max-content'
        color = '#9b1010'
      } else if (idx < 5) {
        flexGrow = 1
        width = 'max-content'
        color = '#fff'
      } else {
        flexGrow = 0
        width = '0px'
        color = '#fff'
      }

      gsap.to(element, {
        flexGrow,
        width,
        duration,
        ease: 'hop',
        color,
      })
    })

    tl.current = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false)
      },
    })

    tl.current.to('.slide', {
      x: (i) => (i === index ? '0' : i < index ? '-100vw' : '100vw'),
      clipPath: (i) =>
        i === index
          ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
          : i < index
            ? 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'
            : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      duration,
      ease: 'hop',
      display: 'block',
    })
  }

  useGSAP(
    () => {
      gsap.set('.slide', {
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
        x: '+100vw',
      })

      gsap.set('.slide:nth-child(1)', {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        x: '0',
      })
    },
    { scope: container },
  )

  return (
    <div className="spolight-content" ref={container}>
      <div className="slider">
        {imagesSlide.map((image, index) => {
          return (
            <div
              key={index}
              className={index === 0 ? 'slide' : 'slide slide-hidden'}
              id={`slide${index}`}
            >
              <Image src={image.path} width={800} alt="" />
            </div>
          )
        })}
      </div>

      <div className="timeline">
        {hours.map((hour, index) => {
          return (
            <p
              key={index}
              className={
                index === 0
                  ? 'timeline-text-selected'
                  : 'timeline-text-unselected'
              }
              onClick={() => handleTimelineClick(index)}
            >
              {hour}
              <sup>th</sup>
            </p>
          )
        })}
      </div>
    </div>
  )
}
