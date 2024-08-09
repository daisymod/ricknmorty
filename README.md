# ricknmorty

### Web Application based on the Rick and Morty Universe

[![Preview](https://cdn.loom.com/sessions/thumbnails/19b1c7f1354249098ce5ff2a97892ada-d14e252abe768612-full-play.gif)](https://www.loom.com/share/19b1c7f1354249098ce5ff2a97892ada?sid=69f0fbe8-d189-4ee0-9f4e-227b2a18b6f2)

(можно посмотреть сайт по ссылке https://ricknmortyuniverse.netlify.app)

==========================

### Запуск приложения локально:

1. Перед началом убедитесь, что у вас установлены Node.js и npm через комманды

```bash
   node -v
   npm -v.
```

Вы можете скачать их с официального сайта Node.js.

2. Клонируйте репозиторий проекта из GitHub

```bash
   git clone https://github.com/daisymod/ricknmorty.git
```

3. Перейдите в папку проекта

```bash
   cd ricknmorty
```

4. Установите зависимости:

```bash
   npm install
```

5. Запустите сервер:

```bash
   npm run serve
```

==========================

### Запуск в Докере

1. Клонируйте репозиторий проекта из GitHub

```bash
   git clone https://github.com/daisymod/ricknmorty.git
```

2. Перейдите в папку проекта

```bash
   cd ricknmorty
```

3. Запустите Docker:

```bash
   docker compose up -d
```

4. Откройте http://localhost/ в браузере.

==========================

- Чтобы создать image

```bash
   docker build -t vuejs-ricknmorty/dockerize-vuejs-app .
```

- Чтобы запустить app в Docker container

```bash
   docker run -it -p 8080:8080 --rm --name dockerize-vuejs-app-1 vuejs-ricknmorty/dockerize-vuejs-app
```
