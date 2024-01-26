FROM node:21-alpine AS BUILD_IMAGE
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM node:21-alpine AS PRODUCTION_IMAGE
WORKDIR /app
COPY --from=BUILD_IMAGE /app/dist /app/dist  
COPY --from=BUILD_IMAGE /app/node_modules /app/node_modules
COPY package.json vite.config.js ./

EXPOSE 8080
CMD ["npm", "run", "preview"]
