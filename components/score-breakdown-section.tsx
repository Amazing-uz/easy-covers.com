import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const metrics = [
  { label: 'Drop Protection', leather: 85, silicone: 75 },
  { label: 'Style & Look', leather: 95, silicone: 55 },
  { label: 'Grip', leather: 70, silicone: 90 },
  { label: 'Durability', leather: 88, silicone: 60 },
  { label: 'Value for Money', leather: 50, silicone: 92 },
  { label: 'Ease of Cleaning', leather: 45, silicone: 95 },
]

export function ScoreBreakdownSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Bar chart */}
          <div>
            <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold mb-4">
              Score Breakdown
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Numbers Don't<br />
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                Lie
              </span>
            </h2>

            {/* Legend */}
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="text-sm font-medium">Leather Case</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cyan-500" />
                <span className="text-sm font-medium">Silicone Case</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {metrics.map((m) => (
                <div key={m.label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{m.label}</span>
                    <span className="text-xs text-muted-foreground">{m.leather} vs {m.silicone}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1 h-2.5">
                    <div className="flex justify-end bg-muted rounded-l-full overflow-hidden">
                      <div
                        className="h-full bg-amber-500 rounded-l-full"
                        style={{ width: `${m.leather}%` }}
                      />
                    </div>
                    <div className="bg-muted rounded-r-full overflow-hidden">
                      <div
                        className="h-full bg-cyan-500 rounded-r-full"
                        style={{ width: `${m.silicone}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/comparison" className="mt-8 inline-block">
              <Button className="bg-gradient-to-r from-purple-600 to-orange-500 text-white mt-6 shadow-md hover:shadow-lg">
                Read Full Comparison <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>


        </div>
      </div>
    </section>
  )
}
