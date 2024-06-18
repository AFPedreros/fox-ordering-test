export default function MoviesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center h-full gap-4 p-6 mx-auto max-w-7xl">
      {children}
    </section>
  );
}
