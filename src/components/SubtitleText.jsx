import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import '../styles/title.scss'

function SubtitleText() {
  const subtitleRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(subtitleRef.current,
      { 
        opacity: 0,
        scale: 0.95
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power2.out',
        delay: 2.5
      }
    )
  }, [])

  return (
    <p className="subtitle-text" ref={subtitleRef}>
      Elite community access
    </p>
  )
}

export default SubtitleText
