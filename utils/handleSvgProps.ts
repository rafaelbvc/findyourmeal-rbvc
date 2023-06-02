import ISvg from "../app/interfaces/InterfaceSvg";

export const handleSVGWidth = ({ width }: ISvg) => {
  switch (width) {
    case "sm":
      return "36px";
    case "md":
      return "72px";
    case "sm":
      return "108px";
    default:
      return "36px";
  }
};

export const handleSVGColor = ({ color }: ISvg) => {
  switch (color) {
    case "gray":
      return "rgb(55, 65, 81)";
    case "blue":
      return "rgb(96 165 250)";
    case "red":
      return "#BB0000";
    default:
      return "rgb(55, 65, 81)";
  }
};
