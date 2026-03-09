import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-background via-green-500/5 to-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-4xl md:text-6xl font-bold mb-4 text-balance"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Полный гайд по выбору чехла
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Все, что вам нужно знать, чтобы выбрать идеальный чехол для вашего смартфона
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-green-500/10 text-green-600 rounded-full text-sm font-bold">📚 Полный гайд</span>
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Для новичков</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Table of Contents */}
          <Card className="p-6 md:p-8 mb-12 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200/30">
            <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Содержание
            </h2>
            <ul className="space-y-2">
              {['Материалы', 'Защита', 'Дизайн', 'Бюджет', 'Уход', 'Выбор'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {idx + 1}
                  </div>
                  <a href={`#section-${idx}`} className="text-green-600 hover:text-green-700 font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Card>

          {/* Section 1 */}
          <div className="mb-12" id="section-0">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              1. Выберите правильный материал
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Первый шаг - понять, какой материал лучше всего соответствует вашим потребностям. Каждый материал имеет свои особенности.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'Кожа', emoji: '🧥', color: 'from-amber-400', features: ['Премиум вид', 'Долговечно', 'Дорого'] },
                { name: 'Силикон', emoji: '🏰', color: 'from-cyan-400', features: ['Дешево', 'Практично', 'Собирает пыль'] },
                { name: 'TPU', emoji: '🛡️', color: 'from-blue-400', features: ['Баланс', 'Хорошая защита', 'Надежно'] },
              ].map((material, idx) => (
                <Card key={idx} className="p-4 bg-gradient-to-br from-background to-background hover:shadow-lg transition">
                  <div className="text-3xl mb-2">{material.emoji}</div>
                  <h3 className="font-bold mb-3">{material.name}</h3>
                  <ul className="space-y-2">
                    {material.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-12 p-6 md:p-8 bg-gradient-to-br from-red-50/50 to-orange-50/50 rounded-xl border border-red-200/20" id="section-1">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              2. Защита - главная функция
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Самая важная функция чехла - это защита вашего телефона от падений и ударов.
            </p>

            <div className="bg-white p-6 rounded-lg border border-border">
              <div className="space-y-4">
                <div>
                  <p className="font-bold mb-2">Уровень защиты от падений (1-5 метров)</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Кожа</span>
                      <div className="w-full max-w-xs bg-gray-200 rounded-full h-3 mx-4">
                        <div className="bg-amber-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <span className="text-sm font-bold">4/5</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Силикон</span>
                      <div className="w-full max-w-xs bg-gray-200 rounded-full h-3 mx-4">
                        <div className="bg-cyan-500 h-3 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <span className="text-sm font-bold">3.5/5</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">TPU</span>
                      <div className="w-full max-w-xs bg-gray-200 rounded-full h-3 mx-4">
                        <div className="bg-blue-500 h-3 rounded-full" style={{ width: '88%' }}></div>
                      </div>
                      <span className="text-sm font-bold">4.5/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-12" id="section-2">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              3. Дизайн и стиль
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Внешний вид чехла говорит о вашем личном стиле. Он должен быть красивым и практичным.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-50 border-2 border-purple-200/30">
                <h3 className="text-lg font-bold mb-3">Минималист</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Простые формы, нейтральные цвета, никакого лишнего. Рекомендуем: черные или серые кожаные чехлы.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    Кожа
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    TPU классика
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-pink-50 to-pink-50 border-2 border-pink-200/30">
                <h3 className="text-lg font-bold mb-3">Яркий стиль</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Яркие цвета, интересные узоры, выделяться из толпы. Идеально: цветной силикон.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    Цветной силикон
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    Паттерн TPU
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <Card className="p-6 md:p-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Готовы выбрать чехол?
            </h2>
            <p className="mb-6 opacity-90">
              Посмотрите наши детальные сравнения товаров
            </p>
            <Button className="bg-white text-green-600 hover:bg-gray-100">
              К сравнениям <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
