"use client";

import { Button } from "./ui/buttons/Button";
import { Header } from "./ui/layout/Header";
import { Carousel } from "./ui/utils/Carousel/Carousel";
import { ImageOverlay } from "./ui/utils/ImageOverlay";

export default function Batata() {
  const carouselItems = [
    { title: "Pullas", text: "Participe de uma jornada cheia de desafios." },
    { title: "Fiore", text: "Customize cada detalhe do seu herói." },
    { title: "Blair", text: "Combata monstros e vença chefes épicos." },
    { title: "Yorm", text: "Participe de uma jornada cheia de desafios." },
    { title: "Mashi", text: "Mente muito." },
    { title: "Alastor", text: "Combata monstros e vença chefes épicos." },
    { title: "Hao Maru", text: "Combata monstros e vença chefes épicos." },
  ];

  return (
    <div className="h-screen flex flex-col">
      <Header />

      <main className="flex-1 overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <section className="h-[90vh] snap-start">
          <ImageOverlay src="/images/pathfinder.png" alt="Example">
            <div className="size-4 pl-20 pt-20">
              <h1 className="text-white text-4xl font-bold">RPG da Galera</h1>
              <div className="flex gap-4 py-4">
                <Button>Jogar</Button>
                <Button>Jogaaaaaaaaaar</Button>
              </div>
            </div>
          </ImageOverlay>
        </section>

        <section className="h-[90vh] pt-20 snap-start bg-red-400 w-full">
          <span className="text-2xl pl-20">Figuras Relevantes</span>
          <Carousel items={carouselItems} visibleItems={3} />
        </section>

        <section className="h-[90vh] pt-20 snap-start bg-blue-400 w-full">
          <span className="text-2xl pl-20">Localizações foda</span>
          <Carousel items={carouselItems} visibleItems={3} />
        </section>
        <section className="h-[100vh] pt-20 snap-start bg-red-400 w-full">
          <span className="text-2xl pl-20">Drak Puta</span>
          <Carousel items={carouselItems} visibleItems={3} />
        </section>
      </main>
    </div>
  );
}
