import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProConComparison } from '@/components/pro-con-comparison'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

export default function ComparisonPage() {
  const leatherPros = [
    'Премиум ощущение в руках',
    'Улучшается с возрастом (патина)',
    'Отличная защита от падений',
    'Дышащий материал',
    'Стильный вид',
    'Долговечность при правильном уходе',
  ]

  const leatherCons = [
    'Дорого (от $50+)',
    'Требует регулярного ухода',
    'Может окрашивать пальцы',
    'Со временем может потертаться',
    'Чувствителен к влаге',
  ]

  const siliconePros = [
    'Доступная цена ($10-20)',
    'Простой уход (просто протри)',
    'Отличное сцепление',
    'Мягкое ощущение',
    'Хорошая защита от ударов',
    'Множество цветов и дизайнов',
  ]

  const siliconeCons = [
    'Собирает пыль и грязь',
    'Становится липким со временем',
    'Может испачкать одежду',
    'Менее долговечно',
    'Выглядит дешево',
    'Может пожелтеть под солнцем',
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-background via-purple-500/5 to-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-4xl md:text-6xl font-bold mb-4 text-balance"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="bg-gradient-to-r from-purple-600 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                Кожа vs Силикон
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Полное сравнение двух самых популярных материалов для чехлов смартфонов
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold">⚔️ Сравнение</span>
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">📋 Гайд</span>
              <span className="px-3 py-1 bg-accent/10 text-cyan-600 rounded-full text-sm font-bold">2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Intro */}
          <div className="mb-12 p-6 md:p-8 bg-gradient-to-br from-purple-50/50 to-orange-50/50 rounded-xl border border-purple-200/20">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Введение
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Когда дело доходит до защиты смартфона, выбор материала чехла - это решающий фактор. В этом подробном сравнении мы рассмотрим два самых популярных материала: классическую кожу и современный силикон.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Оба материала имеют свои сильные и слабые стороны, и ваш выбор будет зависеть от ваших приоритетов - будь то стиль, функциональность или цена.
            </p>
          </div>

          {/* Comparison */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Плюсы и Минусы
            </h2>
            <ProConComparison
              productName="Кожа vs Силикон"
              pros={leatherPros}
              cons={siliconeCons}
            />
          </div>

          {/* Detailed Comparison */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Детальное сравнение
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Leather Card */}
              <Card className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-orange-200/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center text-2xl">
                    🧥
                  </div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Кожаный чехол
                  </h3>
                </div>
                <p className="text-sm text-foreground/80 mb-4">
                  Премиум материал, который обеспечивает элегантность и надежную защиту.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-bold text-muted-foreground mb-1">Цена</p>
                    <p className="text-sm font-bold">$50 - $100+</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground mb-1">Долговечность</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground mb-1">Стиль</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Silicone Card */}
              <Card className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-2xl">
                    🏰
                  </div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Силиконовый чехол
                  </h3>
                </div>
                <p className="text-sm text-foreground/80 mb-4">
                  Практичный выбор, обеспечивающий хорошую защиту по доступной цене.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-bold text-muted-foreground mb-1">Цена</p>
                    <p className="text-sm font-bold">$10 - $20</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground mb-1">Долговечность</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground mb-1">Практичность</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Conclusion */}
          <Card className="p-6 md:p-8 bg-gradient-to-r from-purple-500/10 to-orange-500/10 border-2 border-purple-200/30">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Кто выигрывает?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <span className="font-bold text-foreground">Кожа выигрывает, если:</span> Вы цените премиум качество, долговечность и готовы инвестировать в хороший чехол. Кожа становится красивее с возрастом и служит годами.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-bold text-foreground">Силикон выигрывает, если:</span> Вы хотите практичный, доступный чехол, который просто защищает телефон без лишних хлопот. Идеален для активного образа жизни.
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
