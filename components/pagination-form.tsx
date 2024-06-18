"use client";

import { Pagination } from "@nextui-org/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export const PaginationForm = ({
  total,
  page,
}: {
  total: number;
  page: number;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const searchMovie = searchParams.get("search") || "fox";

  return (
    <Pagination
      page={page}
      size="lg"
      total={total}
      onChange={(newPage) => {
        router.push(`${pathname}?search=${searchMovie}&page=${newPage}`);
      }}
    />
  );
};
