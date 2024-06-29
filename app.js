import bodyParser from 'body-parser';
import express from 'express';

import eventRoutes from './routes/events.js';

const app = express();

app.use(bodyParser.json());
console.log("booo")

app.use(eventRoutes);

app.listen(process.env.PORT);
