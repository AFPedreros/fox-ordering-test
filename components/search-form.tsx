"use client";

import { Button } from "@nextui-org/button";

import { SearchInput } from "./search-input";

import { searchMovie } from "@/api/movies";

export const SearchForm = () => {
  return (
    <form action={searchMovie} className="flex w-full gap-2 md:max-w-xs">
      <SearchInput />
      <Button color="primary" type="submit" variant="flat">
        Buscar
      </Button>
    </form>
  );
};
