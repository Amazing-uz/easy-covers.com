import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { FeaturedProducts } from '@/components/featured-products'
import { BlogSection } from '@/components/blog-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main 
      className="min-h-screen bg-background bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url(/images/homepage-bg.jpg)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white/80"></div>
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <FeaturedProducts />
        <BlogSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  )
}
