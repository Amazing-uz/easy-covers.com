'use client'

import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

interface ProductCardProps {
  title: string
  description: string
  emoji: string
  color: string
  badge?: string
  rating?: number
}

export function ProductCard({ title, description, emoji, color, badge, rating }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 cursor-pointer bg-gradient-to-br from-background to-background hover:from-primary/5 hover:to-secondary/5">
      {/* Header with color gradient */}
      <div className={`bg-gradient-to-r ${color} to-transparent h-24 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }} />
        <div className="absolute inset-0 flex items-center justify-end pr-6">
          <div className="text-6xl drop-shadow-lg">{emoji}</div>
        </div>
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
