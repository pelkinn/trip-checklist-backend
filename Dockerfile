# Базовый образ
FROM node:20-alpine

# Рабочая директория внутри контейнера
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package.json package-lock.json ./
RUN npm install

# Копируем prisma и исходники
COPY prisma ./prisma
COPY src ./src
COPY tsconfig.json .
COPY .env .env

# Генерируем Prisma клиент
RUN npx prisma generate

# Запуск приложения
CMD ["npm", "run", "start:dev"]