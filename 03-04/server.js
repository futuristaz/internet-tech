import express from 'express';
import genreRoutes from './routes/genres.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

app.use('/api/genres', genreRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});