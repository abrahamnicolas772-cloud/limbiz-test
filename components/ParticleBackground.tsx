'use client'
import { useEffect, useRef } from 'react'

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Array<{
      x: number
      y: number
      radius: number
      alpha: number
      speedX: number
      speedY: number
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      const particleCount = Math.min(, Math.floor(window.innerWidth / ))
      for (let i = ; i < particleCount; i++) {
        particles.push({
          x: Math.random()  canvas.width,
          y: Math.random()  canvas.height,
          radius: Math.random()  . + .,
          alpha: Math.random()  . + .,
          speedX: (Math.random() - .)  .,
          speedY: (Math.random() - .)  .,
        })
      }
    }

    const draw = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(, , canvas.width, canvas.height)
      
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, , Math.PI  )
        ctx.fillStyle = `rgba(, , , ${p.alpha})`
        ctx.fill()
        
        p.x += p.speedX
        p.y += p.speedY
        
        if (p.x < ) p.x = canvas.width
        if (p.x > canvas.width) p.x = 
        if (p.y < ) p.y = canvas.height
        if (p.y > canvas.height) p.y = 
      })
      
      animationFrameId = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', resize)
    resize()
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top- left- w-full h-full pointer-events-none z-"
      style={{ opacity: . }}
    />
  )
}

export default ParticleBackground