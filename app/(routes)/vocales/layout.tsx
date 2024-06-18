export default function VowelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-start justify-center gap-4 p-6 mx-auto max-w-7xl">
      <div className="justify-center inline-block w-full">{children}</div>
    </section>
  );
}
