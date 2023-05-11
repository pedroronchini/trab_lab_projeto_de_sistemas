import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen('3000', () => {
  console.log('Server running at http://localhost:3000');
});

export default app;
