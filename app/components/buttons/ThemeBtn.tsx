import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface IButtons extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorBtn?: "blue" | "gray" | "red";
  resize?: string;
  hidden?: boolean;
  text?: string;
  tSize?: string;
  tColor?: "black" | "white";
  onClick?: () => void;
}

export const ThemeBtn = (props: IButtons) => {
  const {
    resize,
    hidden,
    colorBtn,
    text,
    tSize = "text-reg",
    tColor,
    onClick,
  } = props;

  const handleBtnColor = ({ colorBtn }: IButtons) => {
    switch (colorBtn) {
      case "gray":
        return "bg-gray-400 hover:bg-blue-200";
      case "red":
        return "bg-red-600 hover:bg-red-700";
      default:
        return "bg-blue-400 hover:bg-gray-200";
    }
  };

  return (
    <button
      className={`flex rounded ${handleBtnColor({ colorBtn })} ${
        hidden ? " hidden" : ""
      } ${resize}`}
      onClick={onClick}
    >
      <p
        className={`m-auto ${tSize} ${
          tColor === "white" ? " text-white" : "text-black"
        }`}
      >
        {text}
      </p>
    </button>
  );
};

export default ThemeBtn;
