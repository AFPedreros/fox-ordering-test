export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Fox Ordering Test",
  description: "Prueba técnica para Fox Ordering.",
  navItems: [
    {
      label: "Vocales",
      href: "/vocales",
    },
    {
      label: "Películas",
      href: "/peliculas",
    },
    {
      label: "Maqueta",
      href: "/maqueta",
    },
  ],
  navMenuItems: [
    {
      label: "Vocales",
      href: "/vocales",
    },
    {
      label: "Películas",
      href: "/peliculas",
    },
    {
      label: "Maqueta",
      href: "/maqueta",
    },
  ],
  links: {
    github: "https://github.com/AFPedreros/fox-ordering-test",
  },
};
