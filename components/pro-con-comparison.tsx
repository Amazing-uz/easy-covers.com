'use client'

import { Zap, X } from 'lucide-react'

interface ProConComparisonProps {
  productName: string
  pros: string[]
  cons: string[]
  imageUrl?: string
}

export function ProConComparison({ productName, pros, cons, imageUrl }: ProConComparisonProps) {
  return (
    <div className="bg-background rounded-2xl overflow-hidden border border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Pros Side - Cyber Mint */}
        <div className="bg-gradient-to-b from-cyan-400/10 to-cyan-400/5 p-8 md:p-10 border-b md:border-b-0 md:border-r border-border">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-cyan-600" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Плюсы
            </h3>
          </div>
          <ul className="space-y-3">
            {pros.map((pro, idx) => (
              <li key={idx} className="flex items-start gap-3 text-foreground">
                <span className="text-cyan-500 font-bold text-lg mt-0.5">+</span>
                <span className="text-sm md:text-base">{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cons Side - Hot Coral */}
        <div className="bg-gradient-to-b from-orange-400/10 to-orange-400/5 p-8 md:p-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-orange-400 rounded-lg flex items-center justify-center">
              <X className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-orange-600" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Минусы
            </h3>
          </div>
          <ul className="space-y-3">
            {cons.map((con, idx) => (
              <li key={idx} className="flex items-start gap-3 text-foreground">
                <span className="text-orange-500 font-bold text-lg mt-0.5">−</span>
                <span className="text-sm md:text-base">{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
