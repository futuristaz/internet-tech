export function isValidGenre(genre) {
  return (
    genre !== null &&
    typeof genre === 'object' &&
    !Array.isArray(genre) &&
    typeof genre.id === 'string' &&
    /^g_[a-z]+$/.test(genre.id) &&
    Array.isArray(genre.games)
  );
}
