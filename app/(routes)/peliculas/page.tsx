import { CheckboxGroup } from "@nextui-org/checkbox";
import { Divider } from "@nextui-org/divider";

import { getMovies } from "@/api/movies";
import { CustomCheckbox } from "@/components/custom-checkbox";
import { PaginatedMovies } from "@/components/paginated-movies";
import { title } from "@/components/primitives";
import { SearchInput } from "@/components/search-input";

export default async function MoviesPage() {
  const movies = await getMovies({});

  return (
    <div className="flex w-full h-full gap-x-6">
      <div className="relative hidden h-full bg-red-200 md:block">
        <aside className=" fixed h-full max-h-[calc(100vh-108px)] p-6  w-72 rounded-medium bg-default-50">
          <h2 className="font-medium text-large text-foreground">
            Filtrar por
          </h2>
          <Divider className="my-3 bg-default-100" />

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="font-medium leading-8 text-medium text-default-600">
                Año
              </h3>
              <CheckboxGroup
                className="gap-1"
                orientation="horizontal"
                // value={groupSelected}
                // onChange={setGroupSelected}
              >
                <CustomCheckbox value="wifi">2021</CustomCheckbox>
                <CustomCheckbox value="tv">2023</CustomCheckbox>
                <CustomCheckbox value="kitchen">1994</CustomCheckbox>
                <CustomCheckbox value="parking">2000</CustomCheckbox>
              </CheckboxGroup>
            </div>
          </div>
        </aside>
      </div>

      <div className="flex-col flex-1 w-full md:pl-72 ">
        <header className="relative z-20 flex flex-col gap-2 px-4 pt-2 pb-3 rounded-medium bg-default-50 md:pt-3">
          <div className="flex items-center justify-between gap-2">
            <h1 className={title({ size: "sm" })}>Películas</h1>
            <SearchInput />
          </div>
        </header>

        <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <PaginatedMovies initialMovies={movies} />
        </div>
      </div>
    </div>
  );
}
