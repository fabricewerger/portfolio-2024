'use client'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

interface ScrollContainerProps {
  children: React.ReactNode
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis()

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return <>{children}</>
}

export default ScrollContainer
