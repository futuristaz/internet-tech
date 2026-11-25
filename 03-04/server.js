import express from 'express';
import { readFileSync } from 'fs';
import swaggerUi from 'swagger-ui-express';
import { parse } from 'yaml';
import genreRoutes from './routes/genres.js';

const app = express();
const PORT = 3000;
const openApiDocument = parse(
  readFileSync(new URL('./openapi.yaml', import.meta.url), 'utf8')
);

app.use(express.json());
app.use(express.static('public'));

app.get('/openapi.json', (req, res) => {
  res.json(openApiDocument);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));
app.use('/api/genres', genreRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});