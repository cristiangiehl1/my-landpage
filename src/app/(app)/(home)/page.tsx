import './page.css'

import { Metadata } from 'next'
import Image from 'next/image'

import profileImg from '@/assets/home/profile1.png'

import { AnimatedText } from './animated-text'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <main className="page-content hero">
      <div className="home-text">
        <div>
          <AnimatedText />
        </div>
      </div>
      <div className="home-img">
        <Image
          src={profileImg}
          width={750}
          alt=" Cristian Giehl imagem de perfil"
          priority
        />
      </div>
    </main>
  )
}
