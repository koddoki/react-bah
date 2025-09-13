import Image from "next/image";

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
    <div className={`relative w-full h-full ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" />
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}
