import React from "react";
import { Svg, G, Path, Defs, ClipPath, Rect, Line } from "react-native-svg";

export const TakeoffIcon = () => {
  return (
    <Svg width="23" height="23" viewBox="0 0 20 20" fill="none">
      <Defs>
        <ClipPath id="clip0_2227_107">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip0_2227_107)">
        <Path
          d="M15.8925 15.8926C19.1469 12.6382 19.1469 7.36181 15.8925 4.10744C12.6381 0.853075 7.36177 0.853075 4.1074 4.10744C0.853031 7.36181 0.853031 12.6382 4.1074 15.8926C7.36177 19.1469 12.6381 19.1469 15.8925 15.8926Z"
          stroke="#6B7280"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.64307 12.357L12.3571 7.64298"
          stroke="#6B7280"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.3571 12.357V7.64297H7.64307"
          stroke="#6B7280"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

export const LandingIcon = () => {
  return (
    <Svg width="23" height="23" viewBox="0 0 20 20" fill="none">
      <Defs>
        <ClipPath id="clip0_2227_121">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip0_2227_121)">
        <Path
          d="M4.10744 15.8926C7.36181 19.1469 12.6382 19.1469 15.8926 15.8926C19.1469 12.6382 19.1469 7.36182 15.8926 4.10745C12.6382 0.853077 7.36181 0.853076 4.10744 4.10745C0.853074 7.36181 0.853074 12.6382 4.10744 15.8926Z"
          stroke="#6B7280"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.64307 7.64297L12.3571 12.357"
          stroke="#6B7280"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.64289 12.357L12.3569 12.357L12.3569 7.64297"
          stroke="#6B7280"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

export const PlaneDestinationIcon = () => {
  return (
    <Svg width="106" height="35" viewBox="0 0 106 35" fill="none">
      <Line
        x1="0.5"
        y1="17.0294"
        x2="104.682"
        y2="17.0294"
        stroke="#E5E7EB"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
      <G clipPath="url(#clip0_2032_115)">
        <Path
          d="M51.51 26.6924L56.0355 19.6213H60.9853C63.1066 19.6213 64.8744 18.5607 65.2279 17.5C64.8744 16.4393 63.1066 15.3787 60.9853 15.3787H56.0355L51.51 8.30761C51.2272 7.88335 50.8029 7.74193 50.3787 7.88335L49.813 8.02477C49.318 8.2369 49.0352 8.66117 49.1059 9.15614L50.3787 15.3787L46.8431 16.0858L44.7218 13.9645H43.3076L44.0147 17.5L43.3076 21.0355H44.7218L46.8431 18.9142L50.3787 19.6213L49.1059 25.8439C49.0352 26.3388 49.318 26.7631 49.813 26.9752L50.308 27.1874C50.8029 27.2581 51.2272 27.1167 51.51 26.6924Z"
          fill="white"
          stroke="#9CA3AF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2032_115">
          <Rect
            width="24"
            height="24"
            fill="white"
            transform="translate(52.5 0.529434) rotate(45)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
