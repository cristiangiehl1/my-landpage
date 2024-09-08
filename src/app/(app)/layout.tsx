import '@/app/globals.css'

import { ReactNode } from 'react'

import { Footer } from '@/components/footer/Footer'
import { Menu } from '@/components/menu/Menu'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="page-layout">
      <Menu />

      {children}

      <Footer />
    </div>
  )
}
