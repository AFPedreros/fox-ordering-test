import { CheckboxGroup } from "@nextui-org/checkbox";
import { Chip } from "@nextui-org/chip";
import { Divider } from "@nextui-org/divider";

import { getMovies } from "@/api/movies";
import { PaginatedMovies } from "@/components/paginated-movies";
import { PaginationForm } from "@/components/pagination-form";
import { title } from "@/components/primitives";
import { SearchForm } from "@/components/search-form";
import { countMoviesByYear } from "@/lib/utils";

export default async function MoviesPage({
  searchParams,
}: {
  searchParams: { search: string; page: string };
}) {
  const { results: movies, totalResults } = await getMovies({
    search: searchParams.search,
    page: searchParams.page ? Number(searchParams.page) : 1,
  });

  const counts = countMoviesByYear(movies);

  return (
    <div className="flex w-full h-full gap-x-6">
      <div className="relative hidden h-full md:block">
        <aside className=" fixed h-full max-h-[calc(100vh-108px)] p-6  w-72 rounded-medium bg-default-50">
          <h2 className="font-medium text-large text-foreground">
            Cantidad por año
          </h2>
          <Divider className="my-3 bg-default-100" />

          <div className="flex flex-col gap-6">
            <CheckboxGroup className="gap-1" orientation="horizontal">
              {Object.entries(counts).map(([year, count]) => (
                <Chip key={year} color="primary" size="sm" variant="faded">
                  {year} ({count})
                </Chip>
              ))}
            </CheckboxGroup>
          </div>
        </aside>
      </div>

      <div className="flex flex-col items-center flex-1 w-full gap-6 md:pl-72 ">
        <header className="relative z-20 flex flex-col w-full gap-2 px-4 pt-2 pb-3 rounded-medium bg-default-50 md:pt-3">
          <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
            <h1 className={title({ size: "sm" })}>Películas</h1>
            <SearchForm />
          </div>
          <div className="flex flex-wrap gap-2 md:hidden">
            <h2 className="font-medium text-medium shrink-0 text-foreground w-fit">
              Cantidad por año:
            </h2>
            {Object.entries(counts).map(([year, count]) => (
              <Chip key={year} color="primary" size="sm" variant="faded">
                {year} ({count})
              </Chip>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <PaginatedMovies initialMovies={movies} />
        </div>

        <PaginationForm
          page={Number(searchParams.page) ?? 1}
          total={Math.ceil(totalResults / 10)}
        />
      </div>
    </div>
  );
}
