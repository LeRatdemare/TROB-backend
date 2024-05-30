# Getting Started with ExpressJS

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
