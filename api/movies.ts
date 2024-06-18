"use server";

import { redirect } from "next/navigation";

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

export async function searchMovie(formData: FormData) {
  const search = formData.get("search");

  redirect(`/peliculas?search=${search}&page=1`);
}
