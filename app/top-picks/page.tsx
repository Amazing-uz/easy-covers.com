import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Star, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function TopPicksPage() {
  const topPicks = [
    {
      rank: 1,
      title: 'Leather Case Pro Max',
      price: '$89.99',
      rating: 5,
      image: '/images/cards/leather-case.jpg',
      pros: ['Premium feel', 'Excellent protection', 'Improves with age', 'Durable'],
      cons: ['Expensive', 'Requires maintenance'],
      bestFor: 'Those who value premium quality and don\'t mind maintenance',
      category: 'Premium'
    },
    {
      rank: 2,
      title: 'Silicone Case Standard',
      price: '$14.99',
      rating: 4,
      image: '/images/cards/silicone-case.jpg',
      pros: ['Affordable', 'Easy to clean', 'Great grip', 'Multiple colors'],
      cons: ['Gets sticky', 'Collects dust'],
      bestFor: 'Everyday users looking for practical protection',
      category: 'Budget-Friendly'
    },
    {
      rank: 3,
      title: 'TPU Hybrid Case',
      price: '$24.99',
      rating: 4.5,
      image: '/images/cards/tpu-hybrid.jpg',
      pros: ['Perfect balance', 'Good drop protection', 'Easy to clean', 'Reliable'],
      cons: ['Less stylish', 'Thick'],
      bestFor: 'Those seeking the best balance of protection and practicality',
      category: 'Balanced'
    },
    {
      rank: 4,
      title: 'Eco-Friendly Case',
      price: '$19.99',
      rating: 4.2,
      image: '/images/cards/eco-case.jpg',
      pros: ['Biodegradable', 'Eco-conscious', 'Good protection', 'Affordable'],
      cons: ['Less durable', 'Limited colors'],
      bestFor: 'Environmentally conscious users',
      category: 'Eco-Friendly'
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-yellow-500/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-yellow-500/10 text-yellow-600 rounded-full text-sm font-bold mb-4">
                ⭐ Editor's Choice
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                <span className="bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent">
                  Our Top Recommended Cases
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                The best phone cases based on extensive testing and real-world usage
              </p>
            </div>
          </div>
        </section>

        {/* Top Picks */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="space-y-6">
              {topPicks.map((pick) => (
                <Card key={pick.rank} className="p-6 md:p-8 border-2 hover:shadow-lg transition">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                    {/* Rank and Image */}
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="relative w-24 h-24 rounded-xl overflow-hidden border border-border shadow-sm">
                        <Image src={pick.image} alt={pick.title} fill className="object-cover" />
                      </div>
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold">
                        #{pick.rank}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="md:col-span-2">
                      <h2 className="text-xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {pick.title}
                      </h2>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < pick.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">{pick.rating}/5</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{pick.bestFor}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                          {pick.category}
                        </span>
                      </div>
                    </div>

                    {/* Price and Button */}
                    <div className="flex flex-col items-center md:items-end justify-center gap-3">
                      <div className="text-center md:text-right">
                        <p className="text-2xl font-bold text-primary">{pick.price}</p>
                        <p className="text-xs text-muted-foreground">Average Price</p>
                      </div>
                      <Link href="/comparison">
                        <Button variant="outline" size="sm">
                          Details <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Buying Guide */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-purple-500/10 to-orange-500/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                How to Choose the Right Case?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <p className="font-bold mb-2">🎯 For Premium Users</p>
                  <p className="text-sm text-muted-foreground">Go for the Leather Case Pro Max - superior quality and aesthetics</p>
                </Card>
                <Card className="p-4">
                  <p className="font-bold mb-2">💰 On a Budget</p>
                  <p className="text-sm text-muted-foreground">Choose Silicone Case Standard - practical and affordable</p>
                </Card>
                <Card className="p-4">
                  <p className="font-bold mb-2">⚖️ Want Balance</p>
                  <p className="text-sm text-muted-foreground">TPU Hybrid Case offers the best of both worlds</p>
                </Card>
                <Card className="p-4">
                  <p className="font-bold mb-2">🌍 Eco-Conscious</p>
                  <p className="text-sm text-muted-foreground">Eco-Friendly Case is the sustainable choice</p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
