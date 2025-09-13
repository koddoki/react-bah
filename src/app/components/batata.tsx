"use client";

import { Button } from "./ui/buttons/Button";
import { LinkButton } from "./ui/buttons/LinkButton";
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

      <main className="flex-1 overflow-y-scroll snap-y snap-mandatory">
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

        <section className="h-[90vh] snap-start bg-red-400 w-full">
          <span className="text-2xl pl-20 mt-20">Figuras Relevantes</span>
          <Carousel items={carouselItems} visibleItems={3} />
        </section>

        <section className="h-[90vh] snap-start bg-blue-400 w-full">
          <span className="text-2xl pl-20 mt-20">Figuras Relevantes</span>
          <Carousel items={carouselItems} visibleItems={3} />
        </section>
        <section className="h-[90vh] snap-start bg-red-400 w-full">
          <span className="text-2xl pl-20 mt-20">Figuras Relevantes</span>
          <Carousel items={carouselItems} visibleItems={3} />
        </section>
      </main>
    </div>
  );
}

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent text-white flex items-center justify-between px-8 py-4 z-10">
      <div className="text-2xl font-bold">RPG da Galera</div>

      <div className="flex gap-4">
        <Button variant="ghost" size="sm">
          Jogar
        </Button>
        <Button variant="ghost" size="sm">
          Configurações
        </Button>
        <LinkButton variant="ghost" size="sm" href="http://rpgdagalera.com.br">
          Foundry
        </LinkButton>
      </div>
    </header>
  );
}
