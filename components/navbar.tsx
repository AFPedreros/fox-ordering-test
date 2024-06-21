"use client";

import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

import { GithubIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <NextUINavbar
      classNames={{
        base: "bg-primary",
        wrapper: "w-full justify-center ",
        item: "hidden md:flex text-primary-foreground/75 text-sm data-[active=true]:text-primary-foreground",
      }}
      height="64px"
      maxWidth="xl"
    >
      <NavbarBrand as="li" className="gap-3 text-primary-foreground max-w-fit">
        <NextLink className="flex items-center justify-start gap-1" href="/">
          <span className="text-lg font-bold">🦊</span>
          <p className="font-bold text-small">FoxTest</p>
        </NextLink>
      </NavbarBrand>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="center"
      >
        <ul className="justify-start hidden gap-4 ml-2 sm:flex">
          {siteConfig.navItems.map((item) => (
            <NavbarItem
              key={item.href}
              isActive={pathname.startsWith(item.href)}
            >
              <NextLink href={item.href}>{item.label}</NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden gap-2 sm:flex">
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-primary-foreground/75" />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="pl-4 sm:hidden basis-1" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-primary-foreground/75" />
        </Link>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="flex flex-col gap-2 mx-4 mt-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  pathname.startsWith(item.href) ? "primary" : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
