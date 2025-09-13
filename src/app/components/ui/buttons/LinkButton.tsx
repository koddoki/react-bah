import { getButtonClasses, variants, sizes } from "./ButtonClasses";

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}

export function LinkButton({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: LinkButtonProps) {
  return (
    <a className={getButtonClasses(variant, size, className)} {...props}>
      {children}
    </a>
  );
}
