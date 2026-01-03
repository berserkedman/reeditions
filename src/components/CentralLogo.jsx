import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import '../styles/logo.scss'

function CentralLogo() {
  const logoRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1.5 })
    
    tl.fromTo(logoRef.current,
      { opacity: 0, scale: 0.7, rotationZ: -15 },
      { opacity: 1, scale: 1, rotationZ: 0, duration: 2, ease: 'power3.out' }
    )

    gsap.to(logoRef.current, {
      scale: 1.03,
      duration: 3,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay: 3.5
    })

    const handleMouseEnter = () => {
      gsap.to(containerRef.current, {
        scale: 1.08,
        rotationZ: 5,
        duration: 0.6,
        ease: 'power2.out'
      })
      gsap.to('.logo-glow', {
        opacity: 0.8,
        scale: 1.2,
        duration: 0.6,
        ease: 'power2.out'
      })
    }

    const handleMouseLeave = () => {
      gsap.to(containerRef.current, {
        scale: 1,
        rotationZ: 0,
        duration: 0.6,
        ease: 'power2.out'
      })
      gsap.to('.logo-glow', {
        opacity: 0.4,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out'
      })
    }

    const handleClick = () => {
      gsap.to(containerRef.current, {
        scale: 0.95,
        duration: 0.15,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut'
      })
    }

    const container = containerRef.current
    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)
    container.addEventListener('click', handleClick)
    container.addEventListener('touchstart', handleClick)

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('click', handleClick)
      container.removeEventListener('touchstart', handleClick)
    }
  }, [])

  return (
    <a 
      href="https://t.me/reed1t1ons" 
      target="_blank" 
      rel="noopener noreferrer"
      className="logo-link"
    >
      <div className="logo-container" ref={containerRef}>
        <div className="logo-glow"></div>
        <svg className="central-logo" ref={logoRef} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="innerGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <radialGradient id="logoGrad">
              <stop offset="0%" stopColor="#8B0000"/>
              <stop offset="100%" stopColor="#660000"/>
            </radialGradient>
          </defs>
          
          <circle cx="100" cy="100" r="88" className="logo-outer-ring" />
          <circle cx="100" cy="100" r="82" className="logo-circle" filter="url(#innerGlow)" />
          
          <line x1="100" y1="30" x2="100" y2="60" className="logo-line" />
          <line x1="100" y1="140" x2="100" y2="170" className="logo-line" />
          <line x1="30" y1="100" x2="60" y2="100" className="logo-line" />
          <line x1="140" y1="100" x2="170" y2="100" className="logo-line" />
          
          <line x1="45" y1="45" x2="65" y2="65" className="logo-line-thin" />
          <line x1="155" y1="45" x2="135" y2="65" className="logo-line-thin" />
          <line x1="45" y1="155" x2="65" y2="135" className="logo-line-thin" />
          <line x1="155" y1="155" x2="135" y2="135" className="logo-line-thin" />
          
          <path d="M100 45 L125 85 L115 100 L125 115 L100 155 L75 115 L85 100 L75 85 Z" className="logo-symbol" />
          
          <circle cx="100" cy="70" r="4" className="logo-dot" />
          <circle cx="100" cy="130" r="4" className="logo-dot" />
          <circle cx="70" cy="100" r="4" className="logo-dot" />
          <circle cx="130" cy="100" r="4" className="logo-dot" />
          
          <circle cx="100" cy="100" r="25" className="logo-center" fill="url(#logoGrad)" />
          <circle cx="100" cy="100" r="18" className="logo-inner" />
          <path d="M100 88 L106 100 L100 112 L94 100 Z" className="logo-core" />
        </svg>
      </div>
    </a>
  )
}

export default CentralLogo
