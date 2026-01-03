import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import '../styles/intro.scss'

function IntroSequence({ onComplete }) {
  const introRef = useRef(null)
  const overlayRef = useRef(null)
  const symbolsRef = useRef([])

  useEffect(() => {
    const symbols = ['†', '✝', '▼', '▲', '◆']
    const symbolElements = []
    
    for (let i = 0; i < 12; i++) {
      const symbol = document.createElement('div')
      symbol.className = 'intro-symbol'
      symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)]
      symbol.style.left = `${Math.random() * 100}%`
      symbol.style.top = `${Math.random() * 100}%`
      symbol.style.animationDelay = `${Math.random() * 2}s`
      introRef.current.appendChild(symbol)
      symbolElements.push(symbol)
    }

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete()
      }
    })

    gsap.to(symbolElements, {
      y: '+=50',
      opacity: 0.4,
      duration: 2,
      stagger: 0.1,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    tl.to(overlayRef.current, {
      opacity: 0,
      duration: 1.8,
      ease: 'power2.inOut',
      delay: 0.3
    })
    .to(introRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: 'power2.inOut',
      delay: 2.2
    })
    .to(introRef.current, {
      display: 'none',
      duration: 0
    })

    return () => {
      symbolElements.forEach(el => el.remove())
    }
  }, [onComplete])

  return (
    <div className="intro-sequence" ref={introRef}>
      <div className="intro-overlay" ref={overlayRef}></div>
      <div className="intro-glow"></div>
      <div className="intro-pulse"></div>
    </div>
  )
}

export default IntroSequence
