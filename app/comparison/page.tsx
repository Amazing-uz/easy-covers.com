import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { ArrowRight, Star, Clock, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const comparisons = [
  {
    slug: 'leather-vs-silicone',
    title: 'Leather vs Silicone',
    subtitle: 'Which phone case material wins in 2026?',
    category: 'Phone Cases',
    rating: 4.8,
    readTime: '6 min read',
    trending: true,
    leftEmoji: '🧥',
    rightEmoji: '🏰',
    leftName: 'Leather',
    rightName: 'Silicone',
    leftColor: 'from-amber-400 to-orange-500',
    rightColor: 'from-cyan-400 to-blue-500',
    excerpt: 'We tested both materials for durability, grip, style and value. Find out which one suits your lifestyle.',
  },
  {
    slug: 'iphone-vs-android',
    title: 'iPhone 16 vs Samsung S25',
    subtitle: 'The ultimate 2026 smartphone showdown',
    category: 'Smartphones',
    rating: 4.9,
    readTime: '9 min read',
    trending: true,
    leftEmoji: '🍎',
    rightEmoji: '🌟',
    leftName: 'iPhone 16',
    rightName: 'Galaxy S25',
    leftColor: 'from-gray-500 to-gray-700',
    rightColor: 'from-blue-500 to-indigo-600',
    excerpt: 'Camera, battery, software, price — we go head-to-head on every spec that actually matters.',
  },
  {
    slug: 'tpu-vs-polycarbonate',
    title: 'TPU vs Polycarbonate',
    subtitle: 'Budget case materials put to the test',
    category: 'Phone Cases',
    rating: 4.5,
    readTime: '5 min read',
    trending: false,
    leftEmoji: '🛡️',
    rightEmoji: '💎',
    leftName: 'TPU',
    rightName: 'Polycarbonate',
    leftColor: 'from-purple-400 to-purple-600',
    rightColor: 'from-pink-400 to-rose-500',
    excerpt: 'Two affordable materials, completely different experiences. We break down the key differences.',
  },
  {
    slug: 'airpods-vs-galaxy-buds',
    title: 'AirPods Pro vs Galaxy Buds',
    subtitle: 'Premium wireless earbuds compared',
    category: 'Audio',
    rating: 4.7,
    readTime: '7 min read',
    trending: false,
    leftEmoji: '🎧',
    rightEmoji: '🎵',
    leftName: 'AirPods Pro',
    rightName: 'Galaxy Buds',
    leftColor: 'from-white to-gray-200',
    rightColor: 'from-violet-400 to-purple-600',
    excerpt: 'Noise cancellation, fit, audio quality and battery life — every metric tested side by side.',
  },
  {
    slug: 'magsafe-vs-wireless',
    title: 'MagSafe vs Wireless Charging',
    subtitle: 'Which charging method is actually better?',
    category: 'Accessories',
    rating: 4.3,
    readTime: '4 min read',
    trending: false,
    leftEmoji: '🔋',
    rightEmoji: '⚡',
    leftName: 'MagSafe',
    rightName: 'Qi Wireless',
    leftColor: 'from-orange-400 to-orange-600',
    rightColor: 'from-yellow-400 to-amber-500',
    excerpt: 'Speed, convenience and compatibility — everything you need to know before investing.',
  },
  {
    slug: 'glass-vs-plastic-screen',
    title: 'Glass vs Plastic Screen Protectors',
    subtitle: 'Protecting your display the right way',
    category: 'Accessories',
    rating: 4.6,
    readTime: '5 min read',
    trending: false,
    leftEmoji: '🪟',
    rightEmoji: '📱',
    leftName: 'Tempered Glass',
    rightName: 'Plastic Film',
    leftColor: 'from-sky-400 to-cyan-500',
    rightColor: 'from-green-400 to-emerald-500',
    excerpt: 'Clarity, touch sensitivity and drop resistance — which protector is actually worth buying?',
  },
]

const categories = ['All', 'Phone Cases', 'Smartphones', 'Audio', 'Accessories']

export default function ComparisonsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-14 md:py-20 bg-gradient-to-b from-purple-500/10 via-background to-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
              All Comparisons
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold mb-4 text-balance"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Find out which product{' '}
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                actually wins
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every comparison is independently tested with real data, honest opinions and clear verdicts — no sponsored results.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border bg-background sticky top-[73px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 py-3 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                  cat === 'All'
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border text-muted-foreground hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Comparisons Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">

          {/* Trending first */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-orange-500" />
              <h2 className="text-xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Trending Now
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {comparisons.filter((c) => c.trending).map((item) => (
                <Link key={item.slug} href={`/comparison/${item.slug}`}>
                  <Card className="group overflow-hidden border-2 hover:border-primary hover:shadow-xl transition-all duration-300 cursor-pointer">
                    {/* VS Visual */}
                    <div className="grid grid-cols-2 h-32">
                      <div className={`bg-gradient-to-br ${item.leftColor} flex flex-col items-center justify-center gap-1`}>
                        <span className="text-3xl">{item.leftEmoji}</span>
                        <span className="text-white text-xs font-bold">{item.leftName}</span>
                      </div>
                      <div className={`bg-gradient-to-br ${item.rightColor} flex flex-col items-center justify-center gap-1`}>
                        <span className="text-3xl">{item.rightEmoji}</span>
                        <span className="text-white text-xs font-bold">{item.rightName}</span>
                      </div>
                      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-32 flex items-center">
                        <div className="bg-background border-2 border-primary rounded-full w-10 h-10 flex items-center justify-center font-black text-primary text-sm shadow-lg">
                          VS
                        </div>
                      </div>
                    </div>
                    {/* Info */}
                    <div className="p-5 relative">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.category}</span>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {item.readTime}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{item.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-bold">{item.rating}</span>
                        </div>
                        <span className="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read Comparison <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* All comparisons */}
          <div>
            <h2 className="text-xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              All Comparisons
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {comparisons.filter((c) => !c.trending).map((item) => (
                <Link key={item.slug} href={`/comparison/${item.slug}`}>
                  <Card className="group overflow-hidden border-2 hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
                    {/* VS Visual compact */}
                    <div className="grid grid-cols-2 h-24">
                      <div className={`bg-gradient-to-br ${item.leftColor} flex flex-col items-center justify-center gap-1`}>
                        <span className="text-2xl">{item.leftEmoji}</span>
                        <span className="text-white text-xs font-semibold">{item.leftName}</span>
                      </div>
                      <div className={`bg-gradient-to-br ${item.rightColor} flex flex-col items-center justify-center gap-1`}>
                        <span className="text-2xl">{item.rightEmoji}</span>
                        <span className="text-white text-xs font-semibold">{item.rightName}</span>
                      </div>
                      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-24 flex items-center">
                        <div className="bg-background border-2 border-border rounded-full w-8 h-8 flex items-center justify-center font-black text-foreground text-xs shadow">
                          VS
                        </div>
                      </div>
                    </div>
                    {/* Info */}
                    <div className="p-4 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.category}</span>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {item.readTime}
                        </div>
                      </div>
                      <h3 className="text-base font-bold mb-1 group-hover:text-primary transition" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-4 leading-relaxed flex-1">{item.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-bold">{item.rating}</span>
                        </div>
                        <span className="text-primary text-xs font-bold flex items-center gap-1">
                          Read <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
