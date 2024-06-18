export default function MuckUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-start justify-center h-full gap-4">
      {children}
    </section>
  );
}
