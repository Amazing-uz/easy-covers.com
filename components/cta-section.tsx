'use client'

import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600/10 to-orange-500/10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              Не пропусти новые сравнения
            </span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Подпишись на нашу рассылку и получай все новые материалы прямо на почту
          </p>

          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="твоя@почта.com"
              className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:border-primary transition"
            />
            <Button className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600">
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
