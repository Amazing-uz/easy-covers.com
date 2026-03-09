'use client'

import { ProductCard } from './product-card'
import Link from 'next/link'

export function FeaturedProducts() {
  const topProducts = [
    {
      title: 'Кожаный чехол',
      description: 'Премиум защита с элегантным видом',
      emoji: '🧥',
      color: 'from-amber-500',
      badge: 'Premium',
      rating: 5,
      link: '/comparison'
    },
    {
      title: 'Силиконовый чехол',
      description: 'Легкая и удобная защита',
      emoji: '🏰',
      color: 'from-cyan-400',
      badge: 'Популярный',
      rating: 4,
      link: '/comparison'
    },
    {
      title: 'Эко-чехол',
      description: 'Экологичный выбор для планеты',
      emoji: '🌿',
      color: 'from-green-500',
      badge: 'Экологичный',
      rating: 4.5,
      link: '/guide'
    },
  ]

  return (
    <section id="picks" className="py-16 md:py-24 bg-gradient-to-b from-background to-purple-500/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
            ⭐ Топ выборы
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Наши лучшие<br />
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              рекомендации
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Тщательно протестированные товары, которые действительно стоят внимания
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topProducts.map((product, idx) => (
            <Link key={idx} href={product.link}>
              <ProductCard
                title={product.title}
                description={product.description}
                emoji={product.emoji}
                color={product.color}
                badge={product.badge}
                rating={product.rating}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
