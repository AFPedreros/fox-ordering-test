import { title } from "@/components/primitives";
import { Spotlight } from "@/components/spotlight";

export default function Home() {
  return (
    <section className="flex flex-col min-h-full overflow-hidden">
      <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-background dark:bg-dot-white/[0.2]">
        <div className="pointer-events-none fixed inset-0 flex min-h-[calc(100vh-108px)] items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <Spotlight
          className="hidden md:-top-20 md:left-60 md:block"
          fill="white"
        />
        <div className="relative z-10 w-full px-6 mx-auto text-center max-w-7xl ">
          <h1 className={title({ color: "blue", size: "lg" })}>Bienvenido</h1>
          <p className="max-w-2xl mx-auto mt-4 text-base font-normal text-center text-pretty text-default-500">
            Gracias por tomar el tiempo para revisar esta prueba técnica. En
            esta aplicación, construida con Next.js 14, podrán explorar las
            funcionalidades desarrolladas para filtrar y paginar información de
            películas utilizando la API de OMDb.
          </p>
        </div>
      </div>
    </section>
  );
}
