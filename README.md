# Getting Started with ExpressJS

## How to use the API

Connect to the URL [https://trob.netlify.app/.netlify/functions/server/endpoint](https://trob.netlify.app/.netlify/functions/server)

### Available endpoints

- "/" ===> Get the Hello World message

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000)

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Update the online API

## Creation steps

1. `npm init` ===> Create package.json file (NB: change the entry point to 'server.js')
2. `npm install express` ===> Install express app
3. `npm install mongodb` ===> To be able to create a MongoClient
4. `npm install mongoose` ===> To be able to create schemas, models and communicate in NoSQL
5. `npm install dotenv` ===> To be able to use environment variables (for security)
   - Create the ".env" file with your env variables in it
6. `npm install serverless-http`===> Use serverless functions
7. `netlify sites:create` ===> Create netlify app and configure it (basically let default config)
8. `netlify functions:create my_function` ===> Create your different functions
9. `netlify dev` ===> Start local netlify server
10. `netlify env:set MONGODB_URI "mongodb+srv://..."` ===> Add your environment variables to your netlify project
    - Variables = MONGODB_URI ; MONGODB_DATABASE ; MONGODB_COLLECTION
11. `npm run build` ===> Build the project and deploy it on netlify

## Netlify

You must install netlify-cli globally with `npm install netlify-cli -g` in order to link your app to Netlify host.

### Commands

- `netlify sites:create` ===> Create new netlify client in your root folder
- `netlify functions:create --name get_cards` ===> Créer un fichier get_cards.js avec la fonction permettant de récupérer la liste des cartes (faire appel à mongodb)

## Dependencies

- `npm install dotenv`===> To use environnement variables on windows instead of hard coding passwords

## Sources

- [Netlify+ExpressJS+MongoDB](https://www.youtube.com/watch?v=T0QS64-laHE)
- [Netlify and Express in 6 minutes - Spanish](https://www.youtube.com/watch?v=69Uw-Is4-hE)
