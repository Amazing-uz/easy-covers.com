import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'
import Image from 'next/image'

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-background via-green-500/5 to-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-4xl md:text-6xl font-bold mb-4 text-balance"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Complete Phone Case Selection Guide
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Everything you need to know to choose the perfect case for your smartphone
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-green-500/10 text-green-600 rounded-full text-sm font-bold">📚 Complete Guide</span>
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">For Everyone</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Table of Contents */}
          <Card className="p-6 md:p-8 mb-12 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200/30">
            <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Table of Contents
            </h2>
            <ul className="space-y-2">
              {['Materials', 'Protection', 'Design', 'Budget', 'Care', 'Choice'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {idx + 1}
                  </div>
                  <a href={`#section-${idx}`} className="text-green-600 hover:text-green-700 font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Card>

          {/* Section 1 */}
          <div className="mb-12" id="section-0">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              1. Choose the Right Material
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The first step is to understand which material best suits your needs. Each material has its own characteristics.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'Leather', img: '/images/cards/leather-case.jpg', features: ['Premium look', 'Durable', 'Expensive'] },
                { name: 'Silicone', img: '/images/cards/silicone-case.jpg', features: ['Affordable', 'Practical', 'Collects dust'] },
                { name: 'TPU', img: '/images/cards/tpu-case.jpg', features: ['Balance', 'Good protection', 'Reliable'] },
              ].map((material, idx) => (
                <Card key={idx} className="overflow-hidden hover:shadow-lg transition">
                  <div className="relative h-44 w-full">
                    <Image
                      src={material.img}
                      alt={material.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-3">{material.name}</h3>
                    <ul className="space-y-2">
                      {material.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-12 p-6 md:p-8 bg-gradient-to-br from-red-50/50 to-orange-50/50 rounded-xl border border-red-200/20" id="section-1">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              2. Protection is the Main Function
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The most important function of a case is to protect your phone from drops and impacts.
            </p>

            <div className="bg-white p-6 rounded-lg border border-border">
              <div className="space-y-4">
                <div>
                  <p className="font-bold mb-2">Drop Protection Level (6.5-16 feet)</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Leather</span>
                      <div className="w-full max-w-xs bg-gray-200 rounded-full h-3 mx-4">
                        <div className="bg-amber-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <span className="text-sm font-bold">4/5</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Silicone</span>
                      <div className="w-full max-w-xs bg-gray-200 rounded-full h-3 mx-4">
                        <div className="bg-cyan-500 h-3 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <span className="text-sm font-bold">3.5/5</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">TPU</span>
                      <div className="w-full max-w-xs bg-gray-200 rounded-full h-3 mx-4">
                        <div className="bg-blue-500 h-3 rounded-full" style={{ width: '88%' }}></div>
                      </div>
                      <span className="text-sm font-bold">4.5/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-12" id="section-2">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              3. Design and Style
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The appearance of a case reflects your personal style. It should be beautiful and practical.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-50 border-2 border-purple-200/30">
                <h3 className="text-lg font-bold mb-3">Minimalist</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Simple forms, neutral colors, nothing extra. We recommend: black or gray leather cases.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    Leather
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    Classic TPU
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-pink-50 to-pink-50 border-2 border-pink-200/30">
                <h3 className="text-lg font-bold mb-3">Bold Style</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Bright colors, interesting patterns, stand out from the crowd. Ideal: colorful silicone.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    Colored Silicone
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    Pattern TPU
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <Card className="p-6 md:p-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Ready to Choose a Case?
            </h2>
            <p className="mb-6 opacity-90">
              Check out our detailed product comparisons
            </p>
            <Button className="bg-white text-green-600 hover:bg-gray-100">
              To Comparisons <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
