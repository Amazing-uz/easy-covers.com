import { notFound } from 'next/navigation'
import { comparisons } from '@/lib/comparisons-data'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { ArrowLeft, Star, Clock, CheckCircle, XCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export async function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }))
}

export default async function ComparisonArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = comparisons.find((c) => c.slug === slug)
  if (!item) notFound()

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-12 border-b border-border bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/comparison"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Comparisons
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
              {item.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" /> {item.readTime}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> {item.rating}
            </span>
          </div>

          <h1
            className="text-3xl md:text-5xl font-bold mb-3 text-balance"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {item.title}
          </h1>
          <p className="text-lg text-muted-foreground">{item.subtitle}</p>
        </div>
      </section>

      {/* VS visual */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-2 rounded-2xl overflow-hidden shadow-lg h-72 relative">
            <div className="relative overflow-hidden">
              <Image src={item.leftImg} alt={item.leftName} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20" />
              <span className="absolute bottom-4 left-0 right-0 text-center text-sm font-bold text-white drop-shadow-lg">
                {item.leftName}
              </span>
            </div>
            <div className="relative overflow-hidden">
              <Image src={item.rightImg} alt={item.rightName} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20" />
              <span className="absolute bottom-4 left-0 right-0 text-center text-sm font-bold text-white drop-shadow-lg">
                {item.rightName}
              </span>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-background border-4 border-primary rounded-full w-16 h-16 flex items-center justify-center font-black text-primary text-lg shadow-xl">
                VS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scores */}
      <section className="pb-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-5 text-center border-2 border-primary/30">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">{item.leftName}</p>
              <p className="text-5xl font-black text-primary" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {item.leftScore}
              </p>
              <p className="text-xs text-muted-foreground mt-1">/ 100</p>
            </Card>
            <Card className="p-5 text-center border-2">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">{item.rightName}</p>
              <p className="text-5xl font-black text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {item.rightScore}
              </p>
              <p className="text-xs text-muted-foreground mt-1">/ 100</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-base text-muted-foreground leading-relaxed">{item.intro}</p>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2
            className="text-2xl font-bold mb-8"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Pros &amp; Cons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left */}
            <Card className="p-6 border-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0">
                  <Image src={item.leftImg} alt={item.leftName} fill className="object-cover" />
                </div>
                <h3 className="font-bold text-lg">{item.leftName}</h3>
              </div>
              <ul className="space-y-2 mb-4">
                {item.leftPros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {item.leftCons.map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{con}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Right */}
            <Card className="p-6 border-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0">
                  <Image src={item.rightImg} alt={item.rightName} fill className="object-cover" />
                </div>
                <h3 className="font-bold text-lg">{item.rightName}</h3>
              </div>
              <ul className="space-y-2 mb-4">
                {item.rightPros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {item.rightCons.map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{con}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Specs Table */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2
            className="text-2xl font-bold mb-8"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Spec Comparison
          </h2>
          <Card className="overflow-hidden border-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="text-left p-4 font-bold text-muted-foreground">Feature</th>
                  <th className="text-center p-4 font-bold">{item.leftName}</th>
                  <th className="text-center p-4 font-bold">{item.rightName}</th>
                </tr>
              </thead>
              <tbody>
                {item.specs.map((spec, i) => (
                  <tr key={spec.label} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                    <td className="p-4 font-medium text-muted-foreground">{spec.label}</td>
                    <td className="p-4 text-center font-semibold">{spec.left}</td>
                    <td className="p-4 text-center font-semibold">{spec.right}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </section>

      {/* Verdict */}
      <section className="py-12 bg-primary/5 border-y border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Our Verdict
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">{item.verdict}</p>
        </div>
      </section>

      {/* Back link */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/comparison"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> See all comparisons
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
