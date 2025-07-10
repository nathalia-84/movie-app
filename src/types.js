/**
 * @typedef {Object} Movie
 * @property {number} id - Unique identifier for the movie
 * @property {string} title - Title of the movie
 * @property {string} overview - Brief description of the movie
 * @property {string|null} poster_path - Path to the movie poster image
 * @property {number} vote_average - Average rating of the movie (0-10)
 * @property {string} release_date - Release date in YYYY-MM-DD format
 * @property {number} vote_count - Number of votes/ratings
 * @property {number} popularity - Popularity score
 * @property {string} original_language - Original language code
 * @property {string} original_title - Original title of the movie
 * @property {Array<number>} genre_ids - Array of genre IDs
 * @property {boolean} adult - Whether the movie is for adults only
 * @property {boolean} video - Whether this is a video
 * @property {string|null} backdrop_path - Path to the backdrop image
 */

/**
 * @typedef {Object} TMDBApiResponse
 * @property {number} page - Current page number
 * @property {Array<Movie>} results - Array of movie objects
 * @property {number} total_pages - Total number of pages
 * @property {number} total_results - Total number of results
 */

/**
 * @typedef {Object} SearchProps
 * @property {string} searchTerm - Current search term
 * @property {function(string): void} setSearchTerm - Function to update search term
 */

/**
 * @typedef {Object} MovieCardProps
 * @property {Movie} movie - Movie data object
 */

// Export types for use in other files
export {};
