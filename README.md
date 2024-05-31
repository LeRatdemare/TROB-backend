# Getting Started with ExpressJS

## Creation steps

1. `npm init` ===> Create package.json file (NB: change the entry point to 'server.js')
2. `npm install express` ===> Install express app
3. `npm install mongodb` ===> To be able to create a MongoClient
4. `npm install mongoose` ===> To be able to create schemas, models and communicate in NoSQL
5. `npm install dotenv` ===> To be able to use environment variables (for security)
   - Create the ".env" file with your env variables in it
6. `netlify sites:create` ===> Create netlify app and configure it (basically let default config)
7. `netlify functions:create my_function` ===> Create your different functions
8. `netlify dev` ===> Start local netlify server
9. `netlify env:set MONGODB_DATABASE "mongodb+srv://..."` ===> Add your environment variables to your netlify project
   - Variables = MONGODB_URI ; MONGODB_DATABASE ; MONGODB_COLLECTION
10. `netlify deploy` ===> Deploys the app at given URL so we can access it from internet

## Available Scripts

In the project directory, you can run:

### `nodemon server`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000)

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Netlify

You must install netlify-cli globally with `npm install netlify-cli -g` in order to link your app to Netlify host.

### Commands

- `netlify sites:create` ===> Create new netlify client in your root folder
- `netlify functions:create --name get_cards` ===> Créer un fichier get_cards.js avec la fonction permettant de récupérer la liste des cartes (faire appel à mongodb)

## Dependencies

- `npm install dotenv`===> To use environnement variables on windows instead of hard coding passwords
