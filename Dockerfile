# Étape 1 : Construire l'application Angular
FROM node:14 as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build --prod

# Étape 2 : Déployer l'application avec un serveur HTTP léger
FROM nginx:alpine

COPY --from=build /app/dist/b-analysis /usr/share/nginx/html

EXPOSE 80
ENV BACKEND_URL=http://b-analysis-backend:5262/api/v1/

CMD ["nginx", "-g", "daemon off;"]
