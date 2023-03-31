## Contacts - REST API

Contacts is a Node.js app to deal with contacts. 
The web server is created using [Express](https://expressjs.com/). 
[Mongo DB](https://www.mongodb.com/) is used as a database platform.
[Joi ](https://www.npmjs.com/package/joi) is used for data validation.

### REST API provides the following routes:
- @ GET /api/contacts
- @ GET /api/contacts/:id
- @ POST /api/contacts
- @ DELETE /api/contacts/:id
- @ PUT /api/contacts/:id
- @ PATCH / api / contacts /: contactId / favorite

|  Route (request) | Operation     |
| ---------------- | ------------- |
| @ GET /api/contacts     | get all contacts  |
| @ GET /api/contacts/:id     | get a contact by ID  |
| @ POST /api/contacts     | create a new contact  |
| @ DELETE /api/contacts/:id     | delete a contact  |
| @ PUT /api/contacts/:id    | update a contact  |
| @ PATCH /api/contacts/:contactId/favorite     | update the "Favorite" status of a contact  |

### Commands

- `npm start` &mdash; start the server in production mode 
- `npm run start:dev` &mdash; start the server in development mode
- `npm run lint` &mdash; run a code check execution by eslint
- `npm lint:fix` &mdash; run the same linter with automatic correction of simple errors
