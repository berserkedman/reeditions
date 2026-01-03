import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import '../styles/background.scss'

function BackgroundPattern() {
  const patternRef = useRef(null)

  useEffect(() => {
    gsap.to(patternRef.current, {
      backgroundPositionY: '100%',
      duration: 60,
      ease: 'none',
      repeat: -1
    })
  }, [])

  return (
    <div className="background-container">
      <div className="background-pattern" ref={patternRef}></div>
      <div className="background-noise"></div>
    </div>
  )
}

export default BackgroundPattern
