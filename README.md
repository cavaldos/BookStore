# <center>Book Stroe</center>

## Description

## Installation

```bash
$ git clone https://github.com/cavaldos/BookStore.git
```

```bash
$  cd BookStore
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

| object | Functionality | Method | Endpoint                       | Request Body            | Response                      |
| ------ | ------------- | ------ | ------------------------------ | ----------------------- | ----------------------------- |
| auth   | signin        | POST   | /auth/users                    | {name, email, password} | {user object}                 |
|        | signup        | POST   | /auth/login                    | {email, password}       | {token}                       |
|        | resetpassword | GET    | /auth/reset                    | -                       | {book objects array}          |
| -      | -             | -      | -                              | -                       | -                             |
| book   | get all book  | GET    | /book/getall                   | -                       | {matching book objects array} |
|        | create book   | POST   | /book/create                   | -                       | {book object}                 |
|        | delete book   | DELETE | /book/delete                   | {\_id}                  | -                             |
|        | update        | PUT    | /api/return/:id                | {return_date}           | -                             |
|        | pagingation   | GET    | /book/list?page={}&pageSize={} | -                       | {lend/return objects array}   |
|        | find          | GET    | /book/{\_id}                   | -                       | {lend/return objects array}   |
| -      | -             | -      | -                              | -                       | -                             |
| user   | getall        | GET    | /user/getall                   | -                       | {lend/return objects array}   |
|        | delete        | DELETE | /user/:\_id                    | -                       | {lend/return objects array}   |
|        | update        | PUT    | /user/update                   | -                       | {lend/return objects array}   |
|        | create        | POST   | /user/create                   | -                       | {lend/return objects array}   |
|        | find          | GET    | /user/:\_id                    | -                       | {lend/return objects array}   |

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
https://justboil.github.io/admin-one-vue-tailwind/#/dashboard
