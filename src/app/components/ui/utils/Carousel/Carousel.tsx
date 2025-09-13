"use client";

import React, { useState } from "react";
import { CarouselContent } from "./CarouselContent";
import { CarouselNavigation } from "./CarouselNavigation";

export type CarouselItem = {
  title: string;
  text: string;
};

type CarouselProps = {
  items: CarouselItem[];
  visibleItems?: number; // default = 1
};

export function Carousel({ items, visibleItems = 1 }: CarouselProps) {
  const [startIndex, setStartIndex] = useState(0);

  const maxStartIndex = Math.max(0, items.length - visibleItems);
  const visibleItemsList = items.slice(startIndex, startIndex + visibleItems);

  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex < maxStartIndex;

  const handlePrev = () => setStartIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setStartIndex((i) => Math.min(maxStartIndex, i + 1));

  return (
    <div className="w-full flex flex-col items-center">
      <CarouselContent items={visibleItemsList} />
      {items.length > visibleItems && (
        <CarouselNavigation
          items={items}
          startIndex={startIndex}
          onPrev={handlePrev}
          onNext={handleNext}
          canGoPrev={canGoPrev}
          canGoNext={canGoNext}
          visibleItems={visibleItems}
        />
      )}
    </div>
  );
}
