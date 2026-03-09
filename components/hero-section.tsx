'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  const battles = [
    {
      title: 'Leather vs Silicone',
      subtitle: 'Which phone case offers the best protection?',
      left: { name: 'Leather Case', img: '/images/cards/leather-case.jpg', bg: 'bg-amber-50' },
      right: { name: 'Silicone Case', img: '/images/cards/silicone-case.jpg', bg: 'bg-cyan-50' },
      link: '/comparison'
    },
    {
      title: 'iPhone vs Android',
      subtitle: 'The ultimate smartphone showdown',
      left: { name: 'iPhone 16', img: '/images/cards/iphone.jpg', bg: 'bg-gray-50' },
      right: { name: 'Samsung Galaxy', img: '/images/cards/samsung.jpg', bg: 'bg-blue-50' },
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
            Honest product comparisons and reviews. Complete information about the pros and cons.
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
              <div className="relative grid grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg mb-8 h-64">
                {/* Left Side */}
                <div className={`${battles[activeSlide].left.bg} flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform duration-300`}>
                  <div className="relative w-36 h-36">
                    <Image
                      src={battles[activeSlide].left.img}
                      alt={battles[activeSlide].left.name}
                      fill
                      className="object-contain drop-shadow-xl"
                    />
                  </div>
                  <span className="text-sm font-bold text-foreground/70">{battles[activeSlide].left.name}</span>
                </div>

                {/* VS Badge */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-background border-4 border-primary rounded-full w-14 h-14 flex items-center justify-center font-black text-primary text-base shadow-xl">
                    VS
                  </div>
                </div>

                {/* Right Side */}
                <div className={`${battles[activeSlide].right.bg} flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform duration-300`}>
                  <div className="relative w-36 h-36">
                    <Image
                      src={battles[activeSlide].right.img}
                      alt={battles[activeSlide].right.name}
                      fill
                      className="object-contain drop-shadow-xl"
                    />
                  </div>
                  <span className="text-sm font-bold text-foreground/70">{battles[activeSlide].right.name}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex justify-center">
                <Link href={battles[activeSlide].link}>
                  <Button className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-shadow" size="lg">
                    Read Comparison <ArrowRight className="w-4 h-4 ml-2" />
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
