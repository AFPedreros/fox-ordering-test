import { MovieCard } from "./movie-card";

import { Movie } from "@/types";

export const PaginatedMovies = ({
  initialMovies,
}: {
  initialMovies: Movie[] | undefined;
}) => {
  // console.log(initialMovies);

  return (
    <>
      {initialMovies?.map((movie) => (
        <MovieCard key={movie.imdbID} {...movie} />
      ))}
    </>
  );
};
