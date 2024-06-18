import { getMovies } from "@/api/movies";
import { title } from "@/components/primitives";

export default async function MoviesPage() {
  const movies = await getMovies({});

  return (
    <div>
      <h1 className={title()}>Películas</h1>
      {JSON.stringify(movies)}
    </div>
  );
}
