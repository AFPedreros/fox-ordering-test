import axios from "axios";

import { Movie } from "@/types";

const apiKey = process.env.OMDB_API_KEY;

export function getReleaseYear(content: any) {
  const date = content?.release_date;

  if (!date) {
    return null;
  }

  const year = new Date(content.release_date).getFullYear();

  return year;
}

export async function searchMovies(search: string, page?: number) {
  const apiUrl = `http://www.omdbapi.com/?apiKey=${apiKey}&s=${search}&type=movie&plot=full&page=${page}`;

  try {
    const response = await axios.get(apiUrl);
    const results = response.data.Search as Movie[];

    return results;
  } catch (error) {
    return [];
  }
}
