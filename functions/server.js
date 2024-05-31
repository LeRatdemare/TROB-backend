import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import serverless from 'serverless-http';
import { Thing } from '../models/Thing.js';
import dotenv from 'dotenv';


dotenv.config(); // Loading the environment variables

// Connect to the MongoDB database using Mongoose
mongoose
  .connect(
    process.env.MONGODB_URI + process.env.MONGODB_DATABASE,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

var app = express();
app.use(cors());
app.use(express.json());

var port = process.env.PORT || 5000;
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

router.get('/things', (req, res) => {
    Thing.find()
        .then(things => res.status(200).json(things))
        .catch(err => res.status(400).json('Error: ' + err));
    });

app.use('/.netlify/functions/server', router); // path must route to lambda
export const handler = serverless(app);

app.listen(port, () => { // We don't need this because we're using serverless-http
    console.log('Server is running at http://localhost:' + port + '/.netlify/functions/server');
});