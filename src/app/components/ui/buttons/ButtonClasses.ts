import clsx from "clsx";

export const base =
  "flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap font-medium rounded transition-all";

export const variants = {
  primary:
    "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50",
  subtle:
    "bg-gray-100 text-gray-800 hover:bg-gray-200 active:bg-gray-300 disabled:opacity-50",
  ghost:
    "bg-transparent text-white font-bold" +
    " hover:bg-amber-200 hover:text-red-900" +
    " active:bg-red-900 active:text-white" +
    " focus:bg-amber-200/50 focus:outline-none focus:ring-0" +
    " focus-visible:outline-none focus-visible:ring-0" +
    " disabled:opacity-50",
};

export const sizes = {
  sm: "w-[80px] h-8 py-1 px-3 text-sm",
  md: "w-[120px] h-10 py-2 px-4 text-base",
  lg: "w-[160px] h-12 py-3 px-6 text-lg",
};

export function getButtonClasses(
  variant: keyof typeof variants,
  size: keyof typeof sizes,
  className?: string
) {
  return clsx(base, variants[variant], sizes[size], className);
}
