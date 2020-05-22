FROM node:12

ENV NODE_ENV production
ENV PORT 3000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/

RUN npm ci

COPY . /usr/src/app

EXPOSE 3000
CMD ["npm", "start"]
