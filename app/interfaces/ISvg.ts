import { SVGProps } from "react";

export default interface ISvg extends SVGProps<SVGSVGElement> {
  width?: "sm" | "md" | "lg";
  color?: "gray" | "blue" | "red";
}
