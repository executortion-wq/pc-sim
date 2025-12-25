FROM node:18-alpine

WORKDIR /app

# Backend bağımlılıkları
COPY backend/package*.json ./backend/
RUN cd backend && npm install --production

# Tüm proje dosyaları
COPY . .

EXPOSE 3000

CMD ["node", "backend/index.js"]

