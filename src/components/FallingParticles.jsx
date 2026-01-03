import { useEffect, useRef } from 'react'
import '../styles/particles.scss'

function FallingParticles() {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d', { alpha: true })
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const symbols = ['†', '✝', '▼', '▲', '◆', '●', '■']
    
    class Particle {
      constructor() {
        this.reset()
      }
      
      reset() {
        this.x = Math.random() * canvas.width
        this.y = -20
        this.speed = 1 + Math.random() * 2
        this.symbol = symbols[Math.floor(Math.random() * symbols.length)]
        this.opacity = 0.3 + Math.random() * 0.4
        this.size = 12 + Math.random() * 8
        this.trail = []
      }
      
      update() {
        this.trail.push({ x: this.x, y: this.y, opacity: this.opacity })
        if (this.trail.length > 8) this.trail.shift()
        
        this.y += this.speed
        this.x += Math.sin(this.y * 0.01) * 0.5
        
        if (this.y > canvas.height + 20) {
          this.reset()
        }
      }
      
      draw() {
        this.trail.forEach((point, index) => {
          const trailOpacity = (index / this.trail.length) * this.opacity * 0.3
          ctx.fillStyle = `rgba(139, 0, 0, ${trailOpacity})`
          ctx.font = `${this.size * 0.7}px Arial`
          ctx.fillText(this.symbol, point.x, point.y)
        })
        
        ctx.fillStyle = `rgba(139, 0, 0, ${this.opacity})`
        ctx.font = `${this.size}px Arial`
        ctx.fillText(this.symbol, this.x, this.y)
      }
    }

    const particleCount = window.innerWidth < 768 ? 15 : 25
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particlesRef.current.forEach(particle => {
        particle.update()
        particle.draw()
      })
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="falling-particles" />
}

export default FallingParticles
