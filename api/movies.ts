"use server";

import { searchMovies } from "@/lib/fetch-movies";

export async function getMovies({
  search = "fox",
  page = 1,
}: {
  search?: string;
  page?: number;
}) {
  return await searchMovies(search, page);
}
