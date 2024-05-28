## Структура проекта // Structure project 

clicker-server/
├── controllers/
│   └── authController.js
│   └── dropController.js
├── middlewares/
│   └── authenticate.js
├── routes/
│   └── auth.js
│   └── drop.js
├── server.js
└── test/
    └── server.test.js



## Установка и запуск

### Предварительные требования

- Node.js (v12 или выше)
- npm

### Установка

1. Склонируйте репозиторий:

   ```sh
   git clone <репозиторий>
   cd clicker-server

## Роуты проекта // Routes project 

POST /drop/drop-item
Описание: Выполняет дроп предмета для авторизованного пользователя.
Заголовки:
Authorization: string (должен содержать валидный токен)
Тело запроса:
{
  "steamId": "string",
  "playTime": "number"
}
Ответ при успешном дропе предмета:
{
  "success": true,
  "message": "Item dropped successfully",
  "itemId": "number"
}
Ответ при неудачном дропе предмета:
{
  "success": false,
  "message": "No item dropped"
}
Ответ при отсутствии авторизации:
{
  "error": "Unauthorized"
}
## Использованные библиотеки
express: Фреймворк для создания сервера.
body-parser: Парсер для обработки JSON в теле запросов.
morgan: HTTP-запрос логгер.
steam-user: Клиент для взаимодействия с Steam.
steam-totp: Генератор двухфакторных кодов для Steam.
chai: Библиотека для тестирования.
chai-http: HTTP-интеграция для тестирования с Chai.
mocha: Фреймворк для тестирования.

## Логи запросов и активности пользователей записываются в следующие файлы:

logs/access.log: Логи HTTP-запросов.
logs/activity.log: Логи активности пользователей (аутентификация и дроп предметов).Логи
