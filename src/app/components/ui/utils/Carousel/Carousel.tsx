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
};

export function Carousel({ items }: CarouselProps) {
  const [startIndex, setStartIndex] = useState(0);

  const numberOfVisibleItems = 5;
  const centralIndex = 2;

  const visibleItemsList = Array.from({ length: numberOfVisibleItems }).map(
    (_, i) => {
      const offset = i - centralIndex;
      return items[(startIndex + offset + items.length) % items.length];
    }
  );

  const handlePrev = () =>
    setStartIndex((i) => (i === 0 ? items.length - 1 : i - 1));

  const handleNext = () =>
    setStartIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  return (
    <div className="w-full flex flex-col items-center">
      <CarouselContent items={visibleItemsList} />
      {items.length > numberOfVisibleItems && (
        <CarouselNavigation
          items={items}
          startIndex={startIndex}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
