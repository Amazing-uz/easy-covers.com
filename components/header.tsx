import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image 
            src="/images/logo-icon.jpg" 
            alt="EasyCo Logo" 
            width={40} 
            height={40}
            className="rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
          />
          <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
            EasyCo
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/comparison" className="text-sm font-medium hover:text-primary transition">
            Comparisons
          </Link>
          <Link href="/guide" className="text-sm font-medium hover:text-primary transition">
            Guides
          </Link>
          <Link href="/tests" className="text-sm font-medium hover:text-primary transition">
            Tests
          </Link>
          <Link href="/top-picks" className="text-sm font-medium hover:text-primary transition">
            Top Picks
          </Link>
        </div>

        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="w-4 h-4" />
        </Button>
      </nav>
    </header>
  )
}
