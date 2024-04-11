export default function Tools() {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      <div className="absolute z-10 h-[200px] w-[10%] bg-gradient-to-r from-white via-white to-transparent" />
      <div className="absolute right-0 z-10 h-[200px] w-[10%] rotate-180 bg-gradient-to-r from-white via-white to-transparent" />
      <div className="animate-marquee whitespace-nowrap py-12">
        {/* <span className="mx-4 text-4xl">Marquee Item 1</span>
        <span className="mx-4 text-4xl">Marquee Item 2</span>
        <span className="mx-4 text-4xl">Marquee Item 3</span>
        <span className="mx-4 text-4xl">Marquee Item 4</span>
        <span className="mx-4 text-4xl">Marquee Item 5</span> */}
      </div>
    </div>
  );
}
