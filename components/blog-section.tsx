'use client'

import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface BlogPostProps {
  title: string
  category: string
  excerpt: string
  image?: string
  color: string
  badge?: string
  link?: string
}

export function BlogPost({ title, category, excerpt, color, badge, link = '#' }: BlogPostProps) {
  const content = (
    <Card className={`group overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 border-2 bg-gradient-to-br ${color}/5 to-transparent`}>
      {/* Image Placeholder */}
      <div className={`h-40 bg-gradient-to-br ${color} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h40v40H0z" fill-opacity=".05"/%3E%3C/svg%3E")'
        }} />
        <div className="absolute top-4 right-4 flex items-center gap-2">
          {badge && (
            <span className="bg-white/90 text-foreground text-xs font-bold px-3 py-1 rounded-full">
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
          Читать далее
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
      title: 'Полное руководство по выбору чехла для смартфона',
      category: 'Гайд',
      excerpt: 'Разбираемся, какой чехол выбрать в зависимости от ваших потребностей и образа жизни.',
      color: 'from-purple-500',
      badge: '📚 Гайд',
      link: '/guide'
    },
    {
      title: 'Тест падения: какой материал выживает лучше всего?',
      category: 'Тесты',
      excerpt: 'Мы сбросили все типы чехлов с высоты 2 метров и сравнили результаты.',
      color: 'from-orange-500',
      badge: '🔬 Тест',
      link: '/comparison'
    },
    {
      title: 'Экологичные альтернативы традиционным чехлам',
      category: 'Обзоры',
      excerpt: 'Инновационные материалы, которые защищают ваш телефон и планету.',
      color: 'from-green-500',
      badge: '🌍 Эко',
      link: '/guide'
    },
    {
      title: 'Сравнение: Кожа vs Синтетика vs Силикон',
      category: 'Сравнения',
      excerpt: 'Подробный анализ трёх популярных материалов с реальными примерами.',
      color: 'from-blue-500',
      badge: '⚔️ Битва',
      link: '/comparison'
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-bold mb-4">
            📰 Последние материалы
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Разбираемся в<br />
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              деталях
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
