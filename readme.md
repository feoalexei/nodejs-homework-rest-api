## Contacts - REST API

Contacts is a Node.js app to deal with contacts. 
The web server is created using Express. Mongo DB is used as a database platform.

### REST API provides the following routes:
- @ GET /api/contacts
- @ POST /api/contacts
- @ DELETE /api/contacts/:id
- @ PUT /api/contacts/:id
- @ PATCH / api / contacts /: contactId / favorite

### Commands

- `npm start` &mdash; start the server in production mode 
- `npm run start:dev` &mdash; start the server in development mode
- `npm run lint` &mdash; run a code check execution by eslint
- `npm lint:fix` &mdash; run the same linter with automatic correction of simple errors
