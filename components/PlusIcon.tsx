import Svg, { Path } from "react-native-svg";

export const PlusIcon = (props) => (
  <Svg
    width={props.size || "24"}
    height={props.size || "25"}
    viewBox="0 0 24 25"
    fill="none"
  >
    <Path
      d="M5 12.5H19"
      stroke="#111827"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 5.5V19.5"
      stroke="#111827"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
