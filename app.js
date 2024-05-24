const express = require("express");
const mongoose = require("mongoose");
const Thing = require("./models/thing");

// Connect to the MongoDB database using Mongoose
// Be careful, the password is not secure here, it's just for the tutorial
mongoose
  .connect(
    "mongodb+srv://lufuluabon:dbAccessyo5@cluster0.aoa4rkn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();

app.use(express.json()); // This middleware is used to parse the body of requests with a JSON payload

// Add headers to the response to avoid CORS errors
app.use((req, res, next) => {
  // We don't precise the route, so this middleware will be executed for all requests
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.post("/api/stuff", (req, res, next) => {
  delete req.body._id; // Delete the _id field from the request body
  const thing = new Thing({
    ...req.body, // Copy all the fields from the request body (cf : opérateur spread)
  });
  thing
    .save()
    .then(() =>
      res.status(201).json({ message: "Object registered to the database." })
    )
    .catch((error) => res.status(400).json({ error }));
});

// Route to handle GET requests to the /api/stuff endpoint
app.get("/api/stuff", (req, res, next) => {
  Thing.find() // Use the Mongoose model to fetch all the things from the database
    .then((things) => res.status(200).json(things))
    .catch((error) => res.status(400).json({ error }));
});

// Route to handle GET requests to the /api/stuff/:id endpoint
app.get("/api/stuff/:id", (req, res, next) => {
  Thing.findOne({ _id: req.params.id }) // Use the Mongoose model to find a specific thing in the database
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(404).json({ error }));
});

// Route to handle PUT requests to the /api/stuff/:id endpoint
app.put("/api/stuff/:id", (req, res, next) => {
  Thing.updateOne(
    { _id: req.params.id }, // Find the object with the specified ID
    { ...req.body, _id: req.params.id } // New version of the object
  )
    .then(() => res.status(200).json({ message: "Object updated." }))
    .catch((error) => res.status(400).json({ error }));
});

// Route to handle DELETE requests to the /api/stuff/:id endpoint
app.delete("/api/stuff/:id", (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Object deleted." }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = app; // Export the Express app object for use in other modules