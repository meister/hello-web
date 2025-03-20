FROM node:20 AS build

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .
RUN npm run build
RUN npm prune --production

FROM node:20-alpine AS run

ENV NODE_ENV=production
EXPOSE 3000

WORKDIR /app
COPY --from=build /app/build ./build
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules

CMD ["node", "build"]