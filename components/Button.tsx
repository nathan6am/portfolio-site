import React from "react";
import classNames from "classnames";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | string | Array<JSX.Element | string>;
  variant: "primary" | "secondary";
  outline?: boolean;
  className?: string;
  width?: "fit" | "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, className, width = "fit", outline, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={classNames("px-4 py-2 text-lg rounded-lg transition-colors duration-300", className, {
          "w-fit": width === "fit",
          "w-full max-w-xs": width === "sm",
          "w-full max-w-sm": width === "md",
          "w-full max-w-md": width === "lg",
          "bg-teal-600 text-white hover:bg-teal-700": variant === "primary" && !outline,
          "hover:bg-teal-500/[0.2] border-2 border-teal-500 text-teal-500": variant === "primary" && outline,
          "bg-themeLight text-ThemeDark hover:bg-themeLight/[0.9]": variant === "secondary" && !outline,
          "hover:bg-themeLight/[0.2] border-2 border-themeLight text-themeLight": variant === "secondary" && outline,
        })}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
