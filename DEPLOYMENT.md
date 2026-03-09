# 🚀 EasyCo - Инструкция по развертыванию

## Быстрый старт

### 1️⃣ Запуск локально

```bash
# Установка зависимостей
pnpm install

# Запуск dev сервера
pnpm dev

# Откройте браузер: http://localhost:3000
```

### 2️⃣ Развертывание на Vercel

#### Способ 1: Через GitHub (Рекомендуется)
```bash
# 1. Создайте репозиторий на GitHub
git init
git add .
git commit -m "Initial commit: EasyCo product comparison blog"
git branch -M main
git remote add origin https://github.com/yourusername/easyco.git
git push -u origin main

# 2. На Vercel (vercel.com):
# - Нажмите "Import Project"
# - Выберите ваш GitHub репозиторий
# - Нажмите "Deploy"
```

#### Способ 2: Через Vercel CLI
```bash
# 1. Установите Vercel CLI
npm i -g vercel

# 2. Разверните проект
vercel

# Следуйте подсказкам в терминале
```

### 3️⃣ Production сборка

```bash
# Создание оптимизированной сборки
pnpm build

# Запуск production версии локально
pnpm start
```

## 📊 Структура страниц

| Страница | URL | Описание |
|----------|-----|---------|
| Главная | `/` | Слайдер сравнений, топ товары, блог |
| Сравнение | `/comparison` | Подробное сравнение Кожа vs Силикон |
| Гайд | `/guide` | Полный гайд по выбору чехла |

## 🎨 Кастомизация

### Изменение товаров
Отредактируйте файлы:
- `/components/hero-section.tsx` - слайдер сравнений
- `/components/featured-products.tsx` - топ 3 товара
- `/components/blog-section.tsx` - блог посты

### Изменение цветов
Отредактируйте `/app/globals.css`:
```css
:root {
  --electric-lavender: #9D50BB;
  --mango-tango: #FF8235;
  --cyber-mint: #00FFC3;
  --hot-coral: #FF4B2B;
}
```

### Изменение шрифтов
Отредактируйте `/app/layout.tsx`:
```tsx
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google'
```

## 🔧 Популярные изменения

### Добавить новую страницу сравнения
```tsx
// app/comparison-2/page.tsx
import { Header } from '@/components/header'
import { ProConComparison } from '@/components/pro-con-comparison'
import { Footer } from '@/components/footer'

export default function Comparison2Page() {
  return (
    <main>
      <Header />
      <section className="py-20 container mx-auto">
        <ProConComparison
          productName="Product A vs Product B"
          pros={['Плюс 1', 'Плюс 2']}
          cons={['Минус 1', 'Минус 2']}
        />
      </section>
      <Footer />
    </main>
  )
}
```

### Добавить новый блог пост
Отредактируйте `/components/blog-section.tsx` и добавьте объект в массив `posts`:
```tsx
{
  title: 'Новый пост',
  category: 'Категория',
  excerpt: 'Описание поста',
  color: 'from-blue-500',
  badge: '📝 Новое',
  link: '/новая-страница'
}
```

## 📱 Мобильная оптимизация

Сайт полностью адаптивный:
- ✅ Мобильные телефоны (< 640px)
- ✅ Планшеты (640px - 1024px)
- ✅ Десктоп (> 1024px)

Используются Tailwind responsive классы:
```tsx
<div className="text-sm md:text-lg lg:text-xl">
  Адаптивный текст
</div>
```

## 🎓 Изучение кодовой базы

### Главные компоненты
- `Header` - навигация сайта
- `HeroSection` - интерактивный слайдер
- `ProConComparison` - сравнение плюсов/минусов
- `ProductCard` - карточка товара
- `BlogSection` - блог посты

### Главные страницы
- `app/page.tsx` - главная
- `app/comparison/page.tsx` - сравнение
- `app/guide/page.tsx` - гайд

## 🐛 Решение проблем

### Ошибка: "Module not found"
```bash
# Переустановите зависимости
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Ошибка: "Port 3000 already in use"
```bash
# Запустите на другом порту
pnpm dev -- -p 3001
```

### Медленная загрузка изображений
```bash
# Проверьте папку /public/images
# Убедитесь, что изображения оптимизированы
```

## 📈 Performance

- ✅ Next.js 16 с Turbopack
- ✅ Оптимизированные изображения
- ✅ Быстрая загрузка шрифтов
- ✅ Минимальный JavaScript

## 🔐 SEO

Настроены метаданные в `app/layout.tsx`:
- Title: "EasyCo - Сравнение товаров"
- Description: "Честные сравнения и обзоры товаров"

## 📞 Поддержка

Для вопросов и проблем обратитесь к документации:
- [Next.js документация](https://nextjs.org)
- [Tailwind CSS документация](https://tailwindcss.com)
- [shadcn/ui компоненты](https://ui.shadcn.com)

---

**Спасибо за использование EasyCo! 🍪**
