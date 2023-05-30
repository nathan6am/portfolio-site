import React from "react";

import classnames from "classnames";
import { useState } from "react";
import { CheckCircle, WarningCircle, Eye, EyeSlash } from "@phosphor-icons/react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  iconLeft?: React.FC<any>;
  error?: string | null;
  status?: "success" | "warning" | "error" | null;
  label?: string;
  id?: string;
  disabled?: boolean;
  optional?: boolean;
  verifying?: boolean;
  className?: string;
  onForgotPassword?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error, status, verifying, disabled, optional, className, ...props }: InputProps, ref) => {
    return (
      <div className="w-full  mb-2">
        {label && (
          <span className="flex flex-row items-center mb-1">
            <label className="block text-themeLight/[0.8] text-md font-medium" htmlFor={id}>
              {label}
            </label>
            {optional && <p className="text-xs text-white/[0.3] font-medium ml-1 mt-[2px]">(optional)</p>}
          </span>
        )}
        <div className="relative">
          <input
            ref={ref}
            className={classnames(
              className,
              "appearance-none bg-themeLight/[0.1] rounded-md placeholder-themeLight/[0.6] border-themeLight/[0.2] border w-full",
              "focus:bg-themeLight/[0.2] focus:ring-themeLight focus:border-themeLight ring-offset-0 focus:outline-none",
              "py-2 pr-4 pl-3 text-lg",
              {
                "border-green-500 ": status === "success" && !verifying,
                "border-red-500 ring-red-500 ": status === "warning" && !verifying,
                "border-red-500 ": (status === "error" || error) && !verifying,
              }
            )}
            id={id}
            disabled={disabled}
            {...props}
          ></input>

          <div className="absolute right-2 top-0 bottom-0 h-full w-fit flex flex-row justify-center items-center">
            {!verifying && (status === "error" || error) && (
              <WarningCircle className="text-primary-400" weight="fill" size={"1.2em"} />
            )}
          </div>
        </div>
        <div className="h-3 mt-[2px] flex flex-row justify-between">
          {error && !verifying && <p className="text-primary-500 text-xs text-left ">{"* " + error}</p>}
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";
export default Input;
