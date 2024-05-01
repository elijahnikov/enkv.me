export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[720px] justify-center ">
      <div className="w-full space-y-8">
        {children}
        <div className="h-20" />
      </div>
    </div>
  );
}
