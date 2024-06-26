import { Input } from "@nextui-org/input";

import { SearchIcon } from "@/components/icons";

export const SearchInput = () => {
  return (
    <Input
      aria-label="Search"
      className="w-full"
      labelPlacement="outside"
      name="search"
      placeholder="Título..."
      startContent={
        <SearchIcon className="flex-shrink-0 text-base pointer-events-none text-primary-foreground/75" />
      }
      type="search"
    />
  );
};
