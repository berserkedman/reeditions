import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import '../styles/title.scss'

function MainTitle() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  useEffect(() => {
    const letters = titleRef.current.querySelectorAll('.letter')
    
    gsap.fromTo(letters,
      { 
        opacity: 0,
        y: 60
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.5
      }
    )

    gsap.fromTo(subtitleRef.current,
      { 
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        delay: 2
      }
    )
  }, [])

  const title = 'reeditions'
  
  return (
    <div className="title-wrapper">
      <h1 className="main-title" ref={titleRef}>
        {title.split('').map((letter, index) => (
          <span key={index} className="letter">{letter}</span>
        ))}
      </h1>
      <p className="title-subtitle" ref={subtitleRef}>best clan telegram</p>
    </div>
  )
}

export default MainTitle
