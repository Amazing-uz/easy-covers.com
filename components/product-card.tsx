'use client'

import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'
import Image from 'next/image'

interface ProductCardProps {
  title: string
  description: string
  image?: string
  emoji?: string
  color?: string
  badge?: string
  rating?: number
}

export function ProductCard({ title, description, image, emoji, color, badge, rating }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 cursor-pointer bg-gradient-to-br from-background to-background hover:from-primary/5 hover:to-secondary/5">
      {/* Header — real image or fallback gradient */}
      <div className="h-44 relative overflow-hidden bg-muted">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-r ${color ?? 'from-primary'} to-transparent flex items-center justify-end pr-6`}>
            <span className="text-6xl drop-shadow-lg">{emoji}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-bold flex-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {title}
          </h3>
          {badge && (
            <span className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
              {badge}
            </span>
          )}
        </div>

        <p className="text-sm text-muted-foreground mb-4">{description}</p>

        {rating !== undefined && (
          <div className="flex items-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground font-medium">{rating}/5</span>
          </div>
        )}
      </div>

      {/* Hard shadow effect (border) */}
      <div className="absolute inset-0 pointer-events-none border-2 border-black opacity-0 group-hover:opacity-5 rounded-lg transition" />
    </Card>
  )
}
