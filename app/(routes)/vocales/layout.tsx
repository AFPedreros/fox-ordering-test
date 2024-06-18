export default function VowelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-start justify-center gap-4">
      <div className="justify-center inline-block w-full">{children}</div>
    </section>
  );
}
