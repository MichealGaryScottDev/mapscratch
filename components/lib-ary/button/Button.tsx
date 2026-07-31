"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useState,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react";
import "./Button.css";

type ButtonVariant = "default" | "primary" | "ghost" | "secondary" | "outline" | "destructive" | "link";
type ButtonSize = "default" | "sm" | "lg" | "icon" | "md";

export type ButtonProps = {
  children?: ReactNode;
  /** Optional leading icon. Default is none (do not force thumbs-up on CTAs). */
  icon?: ReactNode | null;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  variant?: ButtonVariant;
  /** Accepted for shadcn-compat — maps to CSS modifiers */
  size?: ButtonSize;
  /** Radix/shadcn pattern: merge props onto the single child (e.g. <a>) */
  asChild?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  href?: string;
};

function mapVariant(variant: ButtonVariant): "default" | "primary" | "ghost" {
  if (variant === "primary" || variant === "default") return variant === "primary" ? "primary" : "default";
  if (variant === "ghost" || variant === "link") return "ghost";
  if (variant === "secondary" || variant === "outline") return "default";
  if (variant === "destructive") return "primary";
  return "default";
}

function sizeClass(size?: ButtonSize): string {
  if (!size || size === "default" || size === "md") return "";
  if (size === "sm") return " lib-button--sm";
  if (size === "lg") return " lib-button--lg";
  if (size === "icon") return " lib-button--icon";
  return "";
}

export function Button({
  children,
  icon = null,
  onClick,
  className = "",
  style,
  disabled,
  variant = "default",
  size = "default",
  asChild = false,
  type = "button",
  href,
}: ButtonProps) {
  const [pressed, setPressed] = useState(false);
  const v = mapVariant(variant);
  const cls = `lib-button lib-button--${v}${sizeClass(size)}${pressed ? " lib-button--pressed" : ""}${className ? ` ${className}` : ""}`;

  const pressHandlers = {
    onPointerDown: () => setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => setPressed(false),
    onPointerCancel: () => setPressed(false),
  };

  if (asChild && isValidElement(children)) {
    const child = Children.only(children) as ReactElement<{
      className?: string;
      style?: CSSProperties;
    }>;
    return cloneElement(child, {
      className: [cls, child.props.className].filter(Boolean).join(" "),
      style: { ...style, ...child.props.style },
      ...pressHandlers,
    });
  }

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        style={style}
        aria-disabled={disabled || undefined}
        {...pressHandlers}
      >
        {icon}
        {children != null ? <span>{children}</span> : null}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={cls}
      style={style}
      onClick={onClick}
      {...pressHandlers}
    >
      {icon}
      {children != null ? <span>{children}</span> : null}
    </button>
  );
}

export default Button;
