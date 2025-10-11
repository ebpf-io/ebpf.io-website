FROM node:18

WORKDIR /website

COPY package*.json ./
RUN npm install

# create .env from .env.example if .env doesn't exist, then start the app
CMD ["sh", "-c", "test -f .env || cp .env.example .env; npm run start"]
