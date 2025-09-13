import { CarouselItem } from "./Carousel";

type CarouselNavigationProps = {
  items: CarouselItem[];
  startIndex: number;
  onPrev: () => void;
  onNext: () => void;
};

export function CarouselNavigation({
  items,
  startIndex,
  onPrev,
  onNext,
}: CarouselNavigationProps) {
  return (
    <div className="flex items-center gap-2 mt-2">
      <NavButton onClick={onPrev} enabled={true} label="←" />
      <Indicators totalItems={items.length} activeIndex={startIndex} />

      <NavButton onClick={onNext} enabled={true} label="→" />
    </div>
  );
}

function NavButton({
  onClick,
  enabled,
  label,
}: {
  onClick: () => void;
  enabled: boolean;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={!enabled}
      className={`px-3 py-1 rounded ${
        enabled ? "bg-gray-300 hover:bg-gray-400" : "bg-gray-200 opacity-50"
      }`}
    >
      {label}
    </button>
  );
}

function Indicators({
  totalItems,
  activeIndex,
}: {
  totalItems: number;
  activeIndex: number;
}) {
  const totalPages = Math.max(1, totalItems);
  const indicators = Array.from({ length: totalPages });

  return (
    <div className="flex gap-1">
      {indicators.map((_, i) => {
        const isActive = i === activeIndex;
        return (
          <div
            key={i}
            className={`h-2 w-6 rounded-full transition-colors ${
              isActive ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        );
      })}
    </div>
  );
}
