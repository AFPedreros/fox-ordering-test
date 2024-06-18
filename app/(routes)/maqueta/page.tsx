export default function MuckUpPage() {
  return (
    <div className="grid w-full h-full grid-cols-6 gap-4">
      <div className="flex items-center justify-center col-span-2 border-2 rounded-large">
        Columna 1
      </div>
      <div className="flex items-center justify-center col-span-2 border-2 rounded-large">
        Columna 2
      </div>
      <div className="flex items-center justify-center col-span-2 border-2 rounded-large">
        Columna 3
      </div>

      <div className="flex items-center justify-center col-span-3 border-2 rounded-large">
        Columna 1
      </div>
      <div className="flex items-center justify-center col-span-3 border-2 rounded-large">
        Columna 2
      </div>
    </div>
  );
}
