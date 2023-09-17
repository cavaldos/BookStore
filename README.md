# <center>Book Stroe</center>

## Description

## Installation

```bash
$ git clone https://github.com/cavaldos/CellphoneS-clone.git
```

```bash
$  cd CellphoneS-clone
```

## Running the app

### Client

```bash
# cd path
$ cd client

# install package
$ npm install

# development
$ npm run dev
```

### Server

```bash
# cd path
$ cd server

# install package
$ npm install

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# Client

- <a href="https://cellphone-4mvpos8n0-cavaldos.vercel.app/">Link demo client</a>
![Screenshot from 2022-12-11 19-30-20](https://github.com/cavaldos/BookStore/blob/main/screen/home.png)
---

# Server

- <a href="">Link demo server</a>

### API

| Functionality         | Method | Endpoint              | Request Body                  | Response                      |
| --------------------- | ------ | --------------------- | ----------------------------- | ----------------------------- |
| signin                | POST   | /api/users            | {name, email, password}       | {user object}                 |
| signup                | POST   | /api/login            | {email, password}             | {token}                       |
| resetpassword         | GET    | /api/books            | -                             | {book objects array}          |
| get all book          | GET    | /api/books?title=     | -                             | {matching book objects array} |
| create book           | GET    | /api/books/:id        | -                             | {book object}                 |
| delete book           | POST   | /api/lend             | {user_id, book_id, lend_date} | -                             |
|                       | PUT    | /api/return/:id       | {return_date}                 | -                             |
| Lấy lịch sử mượn sách | GET    | /api/history/:user_id | -                             | {lend/return objects array}   |

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
https://justboil.github.io/admin-one-vue-tailwind/#/dashboard