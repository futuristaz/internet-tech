import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';

const DATA_FILE = fileURLToPath(new URL('../data/steam.json', import.meta.url));

export class GenreConflictError extends Error {}

export async function loadData() {
  return JSON.parse(await readFile(DATA_FILE, 'utf-8'));
}

export async function saveData(data) {
  await writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

export async function getGenres() {
  const data = await loadData();
  return data.genres;
}

export async function getGenreById(genreId) {
  const genres = await getGenres();
  return genres.find((genre) => genre.id === genreId) ?? null;
}

export async function createGenre(genre) {
  const data = await loadData();

  if (data.genres.some((item) => item.id === genre.id)) {
    throw new Error(`Genre "${genre.id}" already exists`);
  }

  data.genres.push(genre);
  await saveData(data);
  return genre;
}

export async function updateGenre(genreId, updatedGenre) {
  const data = await loadData();
  const genreIndex = data.genres.findIndex((genre) => genre.id === genreId);

  if (genreIndex === -1) {
    return null;
  }

  const duplicate = data.genres.some(
    (genre, index) => index !== genreIndex && genre.id === updatedGenre.id
  );

  if (duplicate) {
    throw new Error(`Genre "${updatedGenre.id}" already exists`);
  }

  data.genres[genreIndex] = updatedGenre;
  await saveData(data);
  return updatedGenre;
}

export async function deleteGenre(genreId) {
  const data = await loadData();
  const genreIndex = data.genres.findIndex((genre) => genre.id === genreId);

  if (genreIndex === -1) {
    return null;
  }

  const genre = data.genres[genreIndex];
  const hasPrimaryGames = genre.games.length > 0;
  const hasSecondaryReferences = data.genres.some((item) =>
    item.games.some((game) => game.secondaryGenres?.includes(genreId))
  );

  if (hasPrimaryGames || hasSecondaryReferences) {
    throw new GenreConflictError(
      `Genre "${genreId}" still has games or is referenced by games`
    );
  }

  const [deletedGenre] = data.genres.splice(genreIndex, 1);
  await saveData(data);
  return deletedGenre;
}