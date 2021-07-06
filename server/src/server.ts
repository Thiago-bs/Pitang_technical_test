import express from 'express';
import 'express-async-errors'; 
import routes from './routes'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(5000);
