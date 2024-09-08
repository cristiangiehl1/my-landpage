'use client'

import './menu.css'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Menu as MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { menuLinks } from './routes'

export function Menu() {
  const container = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const tl = useRef(gsap.timeline({ paused: true }))

  function toggleMenu() {
    setIsMenuOpen((prevState) => !prevState)
  }

  useGSAP(
    () => {
      gsap.set('.menu-link-item-holder', {
        y: 75,
      })

      tl.current
        .to('.menu-overlay', {
          duration: 1.25,
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          ease: 'power4.inOut',
        })
        .to('.menu-link-item-holder', {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power4.inOut',
          delay: -0.75,
        })
    },
    { scope: container },
  )

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play()
    } else {
      tl.current.reverse()
    }
  }, [isMenuOpen])

  return (
    <div className="menu-container" ref={container}>
      <header className="menu-bar">
        <div className="menu-logo">
          <Link href={`/`}>Cristian Giehl</Link>
        </div>

        <button className="menu-open" onClick={toggleMenu}>
          <p>Menu</p>
          <MenuIcon />
        </button>
      </header>

      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link href={`/`} onClick={toggleMenu}>
              Cristian Giehl
            </Link>
          </div>

          <div className="menu-close" onClick={toggleMenu}>
            <p>Close</p>
          </div>
        </div>

        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link href={link.path}>{link.label}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-footer">
          <div className="menu-close-icon" onClick={toggleMenu}>
            <p>&#x2715;</p>
          </div>

          <div className="menu-info">
            <div className="menu-info-col">
              <a href="" target="_blank">
                X &#8599;
              </a>
              <a
                href="https://www.instagram.com/cristian.giehl/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram &#8599;
              </a>
              <a
                href="https://www.linkedin.com/in/cristian-giehl-5b3539b4/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn &#8599;
              </a>
            </div>

            <div className="menu-info-col">
              <p>cristiangiehl@gmail.com</p>

              <a href="https://wa.me/5547991115903?">
                <p>(47) 99111-5903</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
