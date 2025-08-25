import Image from "next/image";

export default function Batata() {
  return (
    <div>
      <ImageOverlay src="/images/home-wallpaper.jpg" alt="Example">
        <Header></Header>
        <div className="size-4 pl-20 pt-20">
          <h1 className="text-white text-4xl font-bold">RPG da Galera</h1>
          <div className="flex gap-4 py-4">
            <Button>Jogar</Button>
            <Button>Jogaaaaaaaaaar</Button>
          </div>
        </div>
      </ImageOverlay>
      <div className="bg-red-400 h-96 w-full">
        <div>{"bah, pudim oia só como funfa bem"}</div>
      </div>
    </div>
  );
}

interface ImageOverlayProps {
  src: string;
  alt: string;
  children: React.ReactNode;
  className?: string; // opcional para customizações extras
}

export function ImageOverlay({
  src,
  alt,
  children,
  className = "",
}: ImageOverlayProps) {
  return (
    <div className={`relative w-full h-[600px] ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" />
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "subtle" | "ghost";
  size?: "sm" | "md" | "lg"; // opcional para tamanhos diferentes
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap font-medium rounded transition-all focus:outline-none focus:ring-2 focus:ring-offset-1";

  const variants = {
    primary:
      "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50",
    subtle:
      "bg-gray-100 text-gray-800 hover:bg-gray-200 active:bg-gray-300 disabled:opacity-50",
    ghost:
      "bg-transparent text-white text-bold hover:bg-blue-50 active:bg-blue-100 disabled:opacity-50",
  };

  const sizes = {
    sm: "w-[80px] h-8 py-1 px-3 text-sm",
    md: "w-[120px] h-10 py-2 px-4 text-base",
    lg: "w-[160px] h-12 py-3 px-6 text-lg",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="text-2xl font-bold">RPG da Galera</div>

      <div className="flex gap-4">
        <Button variant="ghost" size="sm">
          Jogar
        </Button>
        <Button variant="ghost" size="sm">
          Configurações
        </Button>
        <Button variant="ghost" size="sm">
          Sair
        </Button>
      </div>
    </header>
  );
}
