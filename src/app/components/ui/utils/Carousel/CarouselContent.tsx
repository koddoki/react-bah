import { CarouselItem } from "./Carousel";

export function CarouselContent({ items }: { items: CarouselItem[] }) {
  const centralIndex = 2;

  const slots = Array.from({ length: 5 });

  return (
    <div className="flex gap-6 px-4 py-8 justify-center overflow-hidden">
      {slots.map((_, i) => {
        const item = items[i - Math.max(0, Math.floor((5 - items.length) / 2))];

        return (
          <div
            key={i}
            className={`flex-shrink-0 w-60 h-96 rounded-2xl shadow-md flex flex-col items-center justify-center text-center p-6 transition-transform duration-300
              ${item ? "bg-red-500" : "bg-transparent"} 
              ${
                i === centralIndex && item ? "scale-100" : "scale-90 opacity-70"
              }
            `}
          >
            {item && (
              <>
                <div className="size-50 bg-amber-300 rounded-full"></div>
                <h2 className="pt-2 text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-white-600">{item.text}</p>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
