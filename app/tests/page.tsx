import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function TestsPage() {
  const tests = [
    {
      title: 'Drop Test: 6 Feet Fall',
      description: 'We tested all cases by dropping them from 6 feet (about 2 meters) onto concrete.',
      cases: ['Leather Case', 'Silicone Case', 'TPU Case'],
      results: [
        { name: 'Leather Case', score: 4.5, description: 'Minor scratches, phone safe' },
        { name: 'Silicone Case', score: 4.0, description: 'Good grip prevented additional damage' },
        { name: 'TPU Case', score: 4.8, description: 'Excellent shock absorption' },
      ]
    },
    {
      title: 'Durability Test: 3 Month Use',
      description: 'Real-world usage test with daily wear and tear.',
      results: [
        { name: 'Leather Case', score: 4.7, description: 'Developed nice patina, no major wear' },
        { name: 'Silicone Case', score: 3.5, description: 'Became sticky, collected dust' },
        { name: 'TPU Case', score: 4.2, description: 'Maintained structure well' },
      ]
    },
    {
      title: 'Grip Comfort Test',
      description: 'Testing ergonomics and grip with extended use.',
      results: [
        { name: 'Leather Case', score: 4.3, description: 'Premium feel, can be slippery when wet' },
        { name: 'Silicone Case', score: 4.8, description: 'Best grip, comfortable in hand' },
        { name: 'TPU Case', score: 4.1, description: 'Good balance, slightly plasticky' },
      ]
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-500/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-blue-500/10 text-blue-600 rounded-full text-sm font-bold mb-4">
                🔬 Laboratory Tests
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Real-World Product Tests
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Scientific testing methodology to compare phone cases in realistic scenarios
              </p>
            </div>
          </div>
        </section>

        {/* Tests Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {tests.map((test, idx) => (
                <Card key={idx} className="p-6 md:p-8 border-2 hover:shadow-lg transition">
                  <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {test.title}
                    </h2>
                    <p className="text-muted-foreground">{test.description}</p>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {test.results.map((result, i) => (
                      <Card key={i} className="p-4 bg-gradient-to-br from-background to-background border">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-bold">{result.name}</h3>
                          <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                            {result.score}/5
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{result.description}</p>
                        {/* Score bar */}
                        <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                            style={{ width: `${(result.score / 5) * 100}%` }}
                          ></div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Want Detailed Comparisons?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Check our in-depth comparison guides for complete pros and cons analysis
            </p>
            <Link href="/comparison">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-shadow" size="lg">
                View Comparisons <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
