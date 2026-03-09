#!/bin/bash

# 🍪 EasyCo - Product Comparison Blog
# Quick Setup Script

echo "🚀 EasyCo Setup"
echo "==============="
echo ""

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm не найден. Установите его:"
    echo "   npm install -g pnpm"
    exit 1
fi

echo "✅ pnpm найден"
echo ""

# Install dependencies
echo "📦 Установка зависимостей..."
pnpm install

if [ $? -eq 0 ]; then
    echo "✅ Зависимости установлены"
else
    echo "❌ Ошибка при установке зависимостей"
    exit 1
fi

echo ""
echo "🎨 Проект готов!"
echo ""
echo "Доступные команды:"
echo "  pnpm dev      - Запустить dev сервер (http://localhost:3000)"
echo "  pnpm build    - Создать production сборку"
echo "  pnpm start    - Запустить production сервер"
echo "  pnpm lint     - Проверить код"
echo ""
echo "📚 Документация:"
echo "  README.md           - Основная документация"
echo "  DEPLOYMENT.md       - Инструкция по развертыванию"
echo "  CONTENT_EXAMPLES.md - Примеры контента"
echo "  project.config.json - Конфигурация проекта"
echo ""
echo "🎯 Следующий шаг:"
echo "  pnpm dev"
echo ""
