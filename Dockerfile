FROM node:18

WORKDIR /website

COPY package*.json ./
RUN npm install

COPY . .
RUN cp .env.example .env

CMD ["npm", "run", "start"]
