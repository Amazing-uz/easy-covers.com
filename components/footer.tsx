'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-lg">EasyCo</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Honest product comparisons and tests
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-foreground transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground transition">Terms of Use</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            © 2026 EasyCo. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70">
            As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  )
}
