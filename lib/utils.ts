import { Movie } from "@/types";

export function countMoviesByYear(movies: Movie[]): Record<string, number> {
  const counts: Record<string, number> = {};

  movies.map((movie) => {
    const year = movie.Year;

    if (counts[year]) {
      counts[year]++;
    } else {
      counts[year] = 1;
    }
  });

  return counts;
}
