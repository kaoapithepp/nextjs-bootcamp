import { cx } from "@emotion/css";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "dark" | "light";
};

export const Button = ({
  children,
  type,
  disabled,
  variant = "light",
}: ButtonProps) => {
  return (
    <button
      className={cx(
        "rounded-full font-bold px-4 py-2 duration-300 hover:bg-green-500",
        variant === "light"
          ? "text-gray-950 bg-gray-100"
          : "text-gray-100 bg-gray-950"
      )}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};
