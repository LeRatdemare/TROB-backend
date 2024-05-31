import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';

var app = express();
app.use(cors());

var port = process.env.PORT || 5000;
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.use('/.netlify/functions/server', router); // path must route to lambda
export const handler = serverless(app);
// app.listen(port); // We don't need this because we're using serverless-http