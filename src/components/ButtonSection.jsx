import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import '../styles/buttons.scss'

function ButtonSection() {
  const buttonsRef = useRef(null)

  useEffect(() => {
    const buttons = buttonsRef.current.querySelectorAll('.action-button')
    
    gsap.fromTo(buttons,
      { 
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 3.5
      }
    )
  }, [])

  const handleButtonClick = (e) => {
    const button = e.currentTarget
    gsap.to(button, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut'
    })
  }

  return (
    <div className="button-section" ref={buttonsRef}>
      <a 
        href="https://t.me/reed1t1ons" 
        target="_blank" 
        rel="noopener noreferrer"
        className="action-button" 
        onClick={handleButtonClick}
      >
        <span>TELEGRAM</span>
      </a>
      <a 
        href="https://t.me/i0033j" 
        target="_blank" 
        rel="noopener noreferrer"
        className="action-button" 
        onClick={handleButtonClick}
      >
        <span>LEADER</span>
      </a>
      <a 
        href="https://t.me/fxciws" 
        target="_blank" 
        rel="noopener noreferrer"
        className="action-button" 
        onClick={handleButtonClick}
      >
        <span>Meat / KV</span>
      </a>
    </div>
  )
}

export default ButtonSection
