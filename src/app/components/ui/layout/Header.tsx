import { Button } from "../buttons/Button";
import { LinkButton } from "../buttons/LinkButton";

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
