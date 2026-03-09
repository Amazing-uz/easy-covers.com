'use client'

import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface BlogPostProps {
  title: string
  category: string
  excerpt: string
  image?: string
  color: string
  badge?: string
  link?: string
}

export function BlogPost({ title, category, excerpt, image, color, badge, link = '#' }: BlogPostProps) {
  const content = (
    <Card className={`group overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 border-2 bg-gradient-to-br ${color}/5 to-transparent`}>
      {/* Image */}
      <div className={`h-48 relative overflow-hidden ${!image ? `bg-gradient-to-br ${color}` : ''}`}>
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : null}
        <div className="absolute top-4 right-4 z-10">
          {badge && (
            <span className="bg-white/90 text-foreground text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              {badge}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-xs font-bold text-primary mb-2 uppercase">{category}</p>
        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition line-clamp-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {excerpt}
        </p>
        <div className="flex items-center text-primary font-bold text-sm group-hover:gap-2 gap-1 transition">
          Read More
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Card>
  );

  return link && link !== '#' ? <Link href={link}>{content}</Link> : content;
}

export function BlogSection() {
  const posts = [
    {
      title: 'Complete Guide to Choosing a Phone Case',
      category: 'Guide',
      excerpt: 'Learn how to choose the best phone case based on your needs and lifestyle.',
      color: 'from-purple-500',
      image: '/images/blog/guide-choosing.jpg',
      badge: 'Guide',
      link: '/guide'
    },
    {
      title: 'Drop Test: Which Material Survives Best?',
      category: 'Tests',
      excerpt: 'We dropped every type of case from 6 feet high and compared the results.',
      color: 'from-orange-500',
      image: '/images/blog/drop-test.jpg',
      badge: 'Test',
      link: '/comparison'
    },
    {
      title: 'Eco-Friendly Alternatives to Traditional Cases',
      category: 'Reviews',
      excerpt: 'Innovative materials that protect your phone and the planet.',
      color: 'from-green-500',
      image: '/images/blog/eco-alternatives.jpg',
      badge: 'Eco',
      link: '/guide'
    },
    {
      title: 'Comparison: Leather vs Synthetic vs Silicone',
      category: 'Comparisons',
      excerpt: 'Detailed analysis of three popular materials with real examples.',
      color: 'from-blue-500',
      image: '/images/blog/leather-vs-synthetic.jpg',
      badge: 'Battle',
      link: '/comparison'
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-bold mb-4">
            📰 Latest Articles
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Going Deep<br />
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              Into Details
            </span>
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, idx) => (
            <BlogPost key={idx} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}
