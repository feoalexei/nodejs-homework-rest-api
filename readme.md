## Contacts - REST API

Contacts is a Node.js app to deal with contacts. 

The web server is created using [Express](https://expressjs.com/).<br />[MongoDB](https://www.mongodb.com/) is used as a database platform.<br />[Mongoose](https://mongoosejs.com/) is used to model application data and for MongoDB validation.<br />[Joi ](https://www.npmjs.com/package/joi) is used for data validation.

### Routes:

|  Request method |  Route | Operation     |
| ---------------- | ------------- | ------------- |
| GET | /api/contacts     | get all contacts  |
| GET | /api/contacts/:id     | get a contact by ID  |
| POST|  /api/contacts     | create a new contact  |
| DELETE | /api/contacts/:id     | delete a contact  |
| PUT |/api/contacts/:id    | update a contact  |
| PATCH |/api/contacts/:contactId/favorite     | update the "Favorite" status of a contact  |

### Commands

- `npm start` &mdash; start the server in production mode 
- `npm run start:dev` &mdash; start the server in development mode
- `npm run lint` &mdash; run a code check execution by eslint
- `npm lint:fix` &mdash; run the same linter with automatic correction of simple errors
