export default function SayHello({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="mb-4 text-lg font-semibold">Say hello! 👋🏻</h1>
      <div className="grid grid-cols-2 justify-center gap-8 sm:grid-cols-3">
        {children}
      </div>
    </div>
  );
}
