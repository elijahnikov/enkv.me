export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="xl:mx-none mx-auto flex max-w-[720px] justify-center xl:relative xl:left-[18vw] xl:block xl:w-[720px] xl:max-w-[720px]">
      <div className="w-full space-y-8">
        {children}
        <div className="h-20" />
      </div>
    </div>
  );
}
