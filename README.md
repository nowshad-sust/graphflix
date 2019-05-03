# graphflix
A graphql movie trailer browser

![screenshot](https://raw.githubusercontent.com/nowshad-sust/graphflix/master/Screenshot.png)

## How to run
- Clone the repository using command: `git clone https://github.com/nowshad-sust/graphflix.git`.
- Cd into the cloned directory with your terminal: `cd graphflix`.
- Open both `server` and `client` directory in two different terminal window/tab.
- Make sure you've satisfied  all the [Database Prerequisites](#database-prerequisites).
- Inside the `server` directory, run `npm install` and then run `npm run start`.
- Inside the `client` directory, run `npm install` and then run `npm run start`.
- `http://localhost:3000` this url should open up automatically on your browser and the app is good to go.
- Browse `http://localhost:4000/graphql` for the GraphiQL UI.

## Database Prerequisites
- Make sure you have mysql installed and it's running on the default port: `3306`.
- If you are running for the first time, create a database named `graphflix`.
- Run `yarn knex migrate:latest` to create mysql tables.
- Run `yarn knex seed:run` to seed the tables with dummy data.
