"use client"

import { useEffect, useRef } from "react"

export function SmokeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let particles: Particle[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener("resize", resize)

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      fadeSpeed: number
      color: string

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.size = Math.random() * 200 + 100
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.2
        this.opacity = Math.random() * 0.08 + 0.02
        this.fadeSpeed = Math.random() * 0.0005 + 0.0002
        // Dark blue to blue-gray colors
        const colors = [
          "rgba(30, 58, 95, ",      // Dark blue
          "rgba(45, 75, 115, ",     // Medium blue
          "rgba(60, 90, 130, ",     // Steel blue
          "rgba(20, 40, 70, ",      // Navy blue
          "rgba(50, 80, 120, ",     // Slate blue
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around screen
        if (this.x < -this.size) this.x = canvas!.width + this.size
        if (this.x > canvas!.width + this.size) this.x = -this.size
        if (this.y < -this.size) this.y = canvas!.height + this.size
        if (this.y > canvas!.height + this.size) this.y = -this.size
      }

      draw() {
        if (!ctx) return
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size
        )
        gradient.addColorStop(0, this.color + this.opacity + ")")
        gradient.addColorStop(0.4, this.color + this.opacity * 0.5 + ")")
        gradient.addColorStop(1, this.color + "0)")

        ctx.fillStyle = gradient
        ctx.fillRect(
          this.x - this.size,
          this.y - this.size,
          this.size * 2,
          this.size * 2
        )
      }
    }

    // Create particles
    const particleCount = Math.min(Math.floor(window.innerWidth / 80), 20)
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw subtle gradient overlay
      const bgGradient = ctx.createRadialGradient(
        canvas.width * 0.3,
        canvas.height * 0.3,
        0,
        canvas.width * 0.5,
        canvas.height * 0.5,
        canvas.width * 0.8
      )
      bgGradient.addColorStop(0, "rgba(40, 70, 110, 0.15)")
      bgGradient.addColorStop(0.5, "rgba(25, 50, 85, 0.1)")
      bgGradient.addColorStop(1, "rgba(10, 25, 50, 0)")
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  )
}
