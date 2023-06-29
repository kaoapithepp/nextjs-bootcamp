import { cx } from "@emotion/css";
import { MouseEventHandler } from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "dark" | "light";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  children,
  type,
  disabled,
  variant = "light",
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        "rounded-full font-bold px-4 py-2 duration-300 hover:bg-green-500",
        variant === "light"
          ? "text-gray-950 bg-gray-100"
          : "text-gray-100 bg-gray-950",
        className
      )}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};
