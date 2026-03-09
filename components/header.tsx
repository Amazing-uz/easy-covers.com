import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            🍪
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
            EasyCo
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#battles" className="text-sm font-medium hover:text-primary transition">
            Сравнения
          </Link>
          <Link href="#guides" className="text-sm font-medium hover:text-primary transition">
            Гайды
          </Link>
          <Link href="#tests" className="text-sm font-medium hover:text-primary transition">
            Тесты
          </Link>
          <Link href="#picks" className="text-sm font-medium hover:text-primary transition">
            Топ выборы
          </Link>
        </div>

        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="w-4 h-4" />
        </Button>
      </nav>
    </header>
  )
}
