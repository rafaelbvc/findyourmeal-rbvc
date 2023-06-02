import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface IButtons extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorBtn?: "blue" | "gray" | "red";
  resize?: boolean;
  hidden?: boolean;
  text: string;
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

  return (
    <button
      className={`flex flex-center p-1 m-1 rounded h-[2rem] ${
        colorBtn === "gray"
          ? " bg-gray-400 hover:bg-blue-200"
          : colorBtn === "red"
          ? " bg-red-600 hover:bg-red-700"
          : " bg-blue-400 hover:bg-gray-200"
      } ${hidden ? " hidden" : ""} ${resize ? "w-full" : "w-[6.25rem]"}`}
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
