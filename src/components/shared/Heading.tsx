import { cn } from "@/utils";
import { createElement } from "react";

/**
 * A flexible, semantic Heading component.
 *
 * ✅ Features:
 * - Renders any heading level (h1–h6)
 * - `view` prop for visual style override
 * - Clean Tailwind defaults for scalable typography
 * - Safe default fallback (`h2`)
 * - Type-safe + allows extra HTML attributes
 *
 * 💡 Examples:
 * <Heading tag="h1">Main Title</Heading>
 * <Heading tag="h3" view="h1">Visually large but semantically h3</Heading>
 * <Heading className="text-indigo-600">Styled Default (h2)</Heading>
 */

type T_HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  tag?: T_HeadingTag;
  view?: T_HeadingTag;
  className?: string;
  children: React.ReactNode;
}

const DEFAULT_SIZES: Record<T_HeadingTag, string> = {
  h1: "text-4xl sm:text-5xl font-bold text-primary",
  h2: "text-3xl sm:text-4xl font-bold text-primary",
  h3: "text-2xl sm:text-3xl font-semibold text-primary",
  h4: "text-xl sm:text-2xl font-medium text-primary",
  h5: "text-lg sm:text-xl font-medium text-primary",
  h6: "text-base sm:text-lg font-medium text-primary",
};

export default function Heading({
  tag = "h2",
  view,
  children,
  className,
  ...props
}: HeadingProps) {
  return createElement(
    tag,
    {
      className: cn(DEFAULT_SIZES[view || tag], className),
      ...props,
    },
    children,
  );
}
