FROM node:16-alpine  AS build-env

# делаем каталог 'app' текущим рабочим каталогом
WORKDIR /app

# копируем оба 'package.json' и 'package-lock.json' (если есть)
COPY package.json ./
COPY package-lock.json ./

# устанавливаем зависимости проекта
RUN npm ci

# копируем файлы и каталоги проекта в текущий рабочий каталог (т.е. в каталог 'app')
COPY . .

# собираем приложение для production с минификацией
RUN npm run build

FROM nginx:1.17.8-alpine

COPY --from=build-env /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-env /app/build /usr/share/nginx/html
