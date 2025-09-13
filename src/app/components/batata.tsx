"use client";

import { Button } from "./ui/buttons/Button";
import { LinkButton } from "./ui/buttons/LinkButton";
import { Carousel } from "./ui/utils/Carousel/Carousel";
import { ImageOverlay } from "./ui/utils/ImageOverlay";

export default function Batata() {
  const carouselItems = [
    {
      title: "Pullas",
      text: "Participe de uma jornada cheia de desafios.",
    },
    {
      title: "Fiore",
      text: "Customize cada detalhe do seu herói.",
    },
    {
      title: "Blair",
      text: "Combata monstros e vença chefes épicos.",
    },
    {
      title: "Yorm",
      text: "Participe de uma jornada cheia de desafios.",
    },
    {
      title: "Mashi",
      text: "Mente muito.",
    },
    {
      title: "Alastor",
      text: "Combata monstros e vença chefes épicos.",
    },
    {
      title: "Hao Maru",
      text: "Combata monstros e vença chefes épicos.",
    },
  ];

  return (
    <div>
      <ImageOverlay src="/images/pathfinder.png" alt="Example">
        <Header />
        <div className="size-4 pl-20 pt-20">
          <h1 className="text-white text-4xl font-bold">RPG da Galera</h1>
          <div className="flex gap-4 py-4">
            <Button>Jogar</Button>
            <Button>Jogaaaaaaaaaar</Button>
          </div>
        </div>
      </ImageOverlay>
      <div className="bg-red-400 w-full">
        <Carousel items={carouselItems} visibleItems={3} />
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 pt-8">
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
