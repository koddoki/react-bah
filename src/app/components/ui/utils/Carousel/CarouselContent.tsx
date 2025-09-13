import { CarouselItem } from "./Carousel";

export function CarouselContent({ items }: { items: CarouselItem[] }) {
  return (
    <div className="flex gap-6 px-4 py-8 justify-center">
      {items.map((item, index) => (
        <div
          key={index}
          className="w-72 h-96 bg-red-500 rounded-2xl shadow-md flex flex-col items-center justify-center text-center p-6"
        >
          <div className="size-50 bg-amber-300 rounded-full"></div>
          <h2 className="pt-2 text-xl font-bold mb-2">{item.title}</h2>
          <p className="text-white-600">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
