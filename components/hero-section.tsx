'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  const battles = [
    {
      title: 'Кожа vs Силикон',
      subtitle: 'Какой чехол лучше всего защищает?',
      left: { name: 'Кожаный чехол', emoji: '🧥', color: 'from-orange-400' },
      right: { name: 'Силиконовый чехол', emoji: '🏰', color: 'from-cyan-400' },
      link: '/comparison'
    },
    {
      title: 'iPhone vs Android',
      subtitle: 'Главное противостояние в смартфонах',
      left: { name: 'iPhone 16', emoji: '🍎', color: 'from-gray-400' },
      right: { name: 'Samsung Galaxy', emoji: '🌈', color: 'from-blue-400' },
      link: '/comparison'
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-purple-50/5 to-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            <span className="bg-gradient-to-r from-purple-600 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              The Silicon Showdown
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Честные сравнения товаров. Полная информация о плюсах и минусах.
          </p>
        </div>

        {/* Battle Card */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-gradient-to-br from-purple-500/10 to-orange-500/10 rounded-2xl p-1">
            <div className="bg-background rounded-2xl p-8 md:p-12">
              {/* Battle Title */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {battles[activeSlide].title}
                </h2>
                <p className="text-muted-foreground">{battles[activeSlide].subtitle}</p>
              </div>

              {/* Versus Container */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
                {/* Left Side */}
                <div className={`bg-gradient-to-br ${battles[activeSlide].left.color} to-orange-500 rounded-xl p-8 text-white shadow-lg transform transition hover:scale-105`}>
                  <div className="text-5xl mb-4">{battles[activeSlide].left.emoji}</div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {battles[activeSlide].left.name}
                  </h3>
                </div>

                {/* VS Badge */}
                <div className="hidden md:flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white border-4 border-purple-600 rounded-full w-16 h-16 flex items-center justify-center font-bold text-purple-600 text-lg shadow-lg">
                    VS
                  </div>
                </div>

                {/* Right Side */}
                <div className={`bg-gradient-to-br ${battles[activeSlide].right.color} to-cyan-500 rounded-xl p-8 text-white shadow-lg transform transition hover:scale-105`}>
                  <div className="text-5xl mb-4">{battles[activeSlide].right.emoji}</div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {battles[activeSlide].right.name}
                  </h3>
                </div>
              </div>

              {/* CTA */}
              <div className="flex justify-center">
                <Link href={battles[activeSlide].link}>
                  <Button className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white" size="lg">
                    Читать сравнение <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2">
          {battles.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-2 transition-all rounded-full ${
                activeSlide === idx ? 'w-8 bg-purple-600' : 'w-2 bg-border hover:bg-muted-foreground'
              }`}
              aria-label={`Go to battle ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
