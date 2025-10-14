import { cn } from "@/utils";
import { createElement } from "react";

/**
 * Paragraph component that can render various inline or text-level HTML elements.
 *
 * 🧩 Supported tags: p, span, em, i, strong, b, u, ins, s, del, code
 *
 * 💡 Features:
 * - Type-safe `tag` prop
 * - `view` prop for alternate visual styles
 * - Tailwind-optimized typography defaults
 * - Works for both inline and block-level text
 */

type T_ParagraphTags =
  | "p"
  | "span"
  | "em"
  | "i"
  | "strong"
  | "b"
  | "u"
  | "ins"
  | "s"
  | "del"
  | "code";

interface Props extends React.HTMLAttributes<HTMLElement> {
  tag?: T_ParagraphTags;
  view?: T_ParagraphTags;
  children: React.ReactNode;
  className?: string;
}

export default function Paragraph({
  tag = "p",
  view,
  children,
  className,
  ...props
}: Props) {
  const defaultStyles: Record<T_ParagraphTags, string> = {
    p: "text-sm lg:text-base text-primary",
    span: "text-sm lg:text-base text-primary",
    strong: "font-semibold text-primary",
    b: "font-semibold text-primary",
    em: "italic text-primary",
    i: "italic text-primary",
    u: "underline decoration-2 underline-offset-4 text-primary",
    ins: "underline decoration-green-500 dark:decoration-green-400 text-primary",
    s: "line-through opacity-70 text-primary",
    del: "line-through text-primary",
    code: "font-mono text-sm lg:text-base text-primary rounded px-1.5 py-0.5",
  };

  return createElement(
    tag,
    {
      className: cn(defaultStyles[view || tag], className),
      ...props,
    },
    children,
  );
}
