# Server Business Logic

An example project to show separation of business logic from a chosen server framework.

## Frameworks

- [x] Express
- [x] Hapi
- [x] Fastify

## Running

```sh
yarn
# For Express
yarn start-express
# For Hapi
yarn start-hapi
# For Fastify
yarn start-fastify
```

## About This Project

This project is used as an exercise in separating the core business logic of a server from the server framework.
The project also makes use of dependency injection for dependencies of the business logic, eg. `dbClient`.
Building the server in this way allows for easy testing, better code reuse, and the ability to use multiple server frameworks at a time.

## License

Unlicensed
