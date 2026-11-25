import { Router } from 'express';
import {
  createGenre,
  deleteGenre,
  GenreConflictError,
  getGenreById,
  getGenres
} from '../lib/store.js';
import { isValidGenre } from '../lib/validation.js';

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

router.post('/', async (req, res) => {
  if (!isValidGenre(req.body)) {
    return res.status(400).json({
      error: 'Invalid genre data'
    });
  }

  try {
    const genre = await createGenre(req.body);

    return res.status(201).json(genre);
  } catch (error) {
    if (error instanceof Error && error.message.startsWith('Genre "')) {
      return res.status(409).json({
        error: 'Genre already exists'
      });
    }

    console.error('Failed to create genre:', error);
    return res.status(500).json({
      error: 'Failed to create genre'
    });
  }
});

router.delete('/:genreId', async (req, res) => {
  try {
    const genre = await deleteGenre(req.params.genreId);

    if (!genre) {
      return res.status(404).json({
        error: 'Genre not found'
      });
    }

    return res.status(204).end();
  } catch (error) {
    if (error instanceof GenreConflictError) {
      return res.status(409).json({
        error: 'Deleting the genre would leave invalid game relationships'
      });
    }

    console.error('Failed to delete genre:', error);
    return res.status(500).json({
      error: 'Failed to delete genre'
    });
  }
});

export default router;