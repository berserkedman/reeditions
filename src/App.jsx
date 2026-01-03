import { useState, useEffect } from 'react'
import IntroSequence from './components/IntroSequence'
import BackgroundPattern from './components/BackgroundPattern'
import FallingParticles from './components/FallingParticles'
import CentralLogo from './components/CentralLogo'
import MainTitle from './components/MainTitle'
import SubtitleText from './components/SubtitleText'
import ButtonSection from './components/ButtonSection'
import CreditText from './components/CreditText'

function App() {
  const [introComplete, setIntroComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroComplete(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="app">
      <IntroSequence onComplete={() => setIntroComplete(true)} />
      <BackgroundPattern />
      <FallingParticles />
      <CreditText />
      {introComplete && (
        <>
          <div className="content-wrapper">
            <MainTitle />
            <CentralLogo />
            <SubtitleText />
            <ButtonSection />
          </div>
        </>
      )}
    </div>
  )
}

export default App
