import { Router } from 'express';
import { getGenreById, getGenres } from '../lib/store.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const genres = await getGenres();
    const summaries = genres.map((genre) => ({
      id: genre.id,
      gamesCount: genre.games.length
    }));

    return res.status(200).json(summaries);
  } catch (error) {
    console.error('Failed to load genres:', error);
    return res.status(500).json({
      error: 'Failed to load genres'
    });
  }
});

router.get('/:genreId', async (req, res) => {
  try {
    const genre = await getGenreById(req.params.genreId);

    if (!genre) {
      return res.status(404).json({
        error: 'Genre not found'
      });
    }

    return res.status(200).json(genre);
  } catch (error) {
    console.error('Failed to load genre:', error);
    return res.status(500).json({
      error: 'Failed to load genre'
    });
  }
});

export default router;