"use client";

import { Image } from "@nextui-org/image";

import { Movie } from "@/types";

export const MovieCard = (movie: Movie) => {
  return (
    <article className="relative flex flex-col items-center flex-none w-full gap-3 group">
      <Image
        isBlurred
        isZoomed
        removeWrapper
        alt={movie.Title}
        className="w-full bg-red-100 group-hover:scale-110 sm:aspect-auto"
        src={movie.Poster}
      />
      <h3 className="font-medium text-small text-default-700">{movie.Title}</h3>
      <p className="truncate text-small text-default-500">{movie.Year}</p>
    </article>
  );
};
