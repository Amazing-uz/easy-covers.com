'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                🍪
              </div>
              <span className="font-bold text-lg">EasyCo</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Честные сравнения и тесты товаров
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition">Сравнения</Link></li>
              <li><Link href="#" className="hover:text-foreground transition">Гайды</Link></li>
              <li><Link href="#" className="hover:text-foreground transition">Тесты</Link></li>
              <li><Link href="#" className="hover:text-foreground transition">О нас</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold mb-4">Категории</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition">Чехлы</Link></li>
              <li><Link href="#" className="hover:text-foreground transition">Смартфоны</Link></li>
              <li><Link href="#" className="hover:text-foreground transition">Аксессуары</Link></li>
              <li><Link href="#" className="hover:text-foreground transition">Наушники</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition">Политика конфиденциальности</Link></li>
              <li><Link href="#" className="hover:text-foreground transition">Условия использования</Link></li>
              <li><Link href="#" className="hover:text-foreground transition">Контакты</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 EasyCo. Все права защищены.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                Twitter
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                Instagram
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                YouTube
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
