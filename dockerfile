FROM node:16-alpine3.15 as builder
WORKDIR /usr/app
COPY . .
RUN apk add --no-cache git
RUN yarn
RUN yarn build

FROM node:16-alpine3.15 as production
WORKDIR /usr/app

COPY --from=builder /usr/app/ .

EXPOSE 3333
CMD ["node","dist/index.js"]