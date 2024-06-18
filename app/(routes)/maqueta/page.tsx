export default function MuckUpPage() {
  return (
    <div className="grid w-full h-full grid-cols-1 gap-4 sm:grid-cols-6">
      <div className="flex items-center justify-center col-span-1 border-2 sm:col-span-2 rounded-large">
        Columna 1
      </div>
      <div className="flex items-center justify-center col-span-1 border-2 sm:col-span-2 rounded-large">
        Columna 2
      </div>
      <div className="flex items-center justify-center col-span-1 border-2 sm:col-span-2 rounded-large">
        Columna 3
      </div>

      <div className="flex items-center justify-center col-span-1 border-2 sm:col-span-3 rounded-large">
        Columna 1
      </div>
      <div className="flex items-center justify-center col-span-1 border-2 sm:col-span-3 rounded-large">
        Columna 2
      </div>
    </div>
  );
}
