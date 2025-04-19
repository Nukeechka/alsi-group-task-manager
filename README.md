## Task Manager

### Шаг 1: Клонирование репозитория

```sh
git clone https://github.com/nukeechka/alsi-group-task-manager.git
cd alsi-group-task-manager
```

### Шаг 2: Установка зависимостей

```sh
composer install
npm install
```

### Шаг 3: Запуск БД с docker-compose

```sh
docker-compose up db -d
```

### Шаг 4: Настройка окружения

Скопируйте файл `.env.example` в `.env` и настройте параметры базы данных (из docker-compose.yaml).

```sh
cp .env.example .env
php artisan key:generate
```

### Шаг 5: Миграция базы данных

```sh
php artisan migrate
```

### Шаг 6: Запуск сервера и клиента

```sh
php artisan serve
npm run dev
```

### Шаг 7: Открытие приложения

Откройте браузер и перейдите по адресу `http://localhost:8000`.

<hr>

## Инструкции по развертыванию с Docker

### Шаг 1: Клонирование репозитория

```sh
git clone https://github.com/nukeechka/alsi-group-task-manager.git
cd alsi-group-task-manager
```

(Возможно надо будет поменять в .env DB_HOST на название контейнера Docker)

### Шаг 2: Сборка и запуск контейнеров

```sh
docker-compose up --build
```

### Шаг 3: Выполнение миграций базы данных

```sh
docker-compose exec app php artisan migrate
```

### Шаг 4: Открытие приложения

Откройте браузер и перейдите по адресу `http://localhost:8000`.
