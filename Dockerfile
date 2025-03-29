FROM node:20

WORKDIR /project

COPY package* .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]