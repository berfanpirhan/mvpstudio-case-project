import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

export const FlightsIcon = (props) => (
  <Svg width={props.size} height={props.size} viewBox="0 0 25 25" fill="none">
    <Path
      d="M18.5417 20L16.6667 11.4583L20.3125 7.8125C21.875 6.25 22.3958 4.16667 21.875 3.125C20.8333 2.60417 18.75 3.125 17.1875 4.6875L13.5417 8.33333L5 6.45833C4.47917 6.35417 4.0625 6.5625 3.85417 6.97917L3.54167 7.5C3.33333 8.02083 3.4375 8.54167 3.85417 8.85417L9.375 12.5L7.29167 15.625H4.16667L3.125 16.6667L6.25 18.75L8.33333 21.875L9.375 20.8333V17.7083L12.5 15.625L16.1458 21.1458C16.4583 21.5625 16.9792 21.6667 17.5 21.4583L18.0208 21.25C18.4375 20.9375 18.6458 20.5208 18.5417 20Z"
      stroke={props.color} // Use dynamic color
      strokeWidth="2.08333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ProfileIcon = (props) => (
  <Svg width={props.size} height={props.size} viewBox="0 0 25 25" fill="none">
    <Path
      d="M18.75 20.8333C18.75 19.1757 18.0915 17.586 16.9194 16.4139C15.7473 15.2418 14.1576 14.5833 12.5 14.5833C10.8424 14.5833 9.25269 15.2418 8.08058 16.4139C6.90848 17.586 6.25 19.1757 6.25 20.8333"
      stroke={props.color} // Use dynamic color
      strokeWidth="2.08333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.4999 14.5833C14.8011 14.5833 16.6666 12.7179 16.6666 10.4167C16.6666 8.11548 14.8011 6.25 12.4999 6.25C10.1987 6.25 8.33325 8.11548 8.33325 10.4167C8.33325 12.7179 10.1987 14.5833 12.4999 14.5833Z"
      stroke={props.color} // Use dynamic color
      strokeWidth="2.08333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.4999 22.9166C18.2529 22.9166 22.9166 18.2529 22.9166 12.5C22.9166 6.74701 18.2529 2.08331 12.4999 2.08331C6.74695 2.08331 2.08325 6.74701 2.08325 12.5C2.08325 18.2529 6.74695 22.9166 12.4999 22.9166Z"
      stroke={props.color} // Use dynamic color
      strokeWidth="2.08333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const PlansIcon = (props) => (
  <Svg width={props.size} height={props.size} viewBox="0 0 25 25" fill="none">
    {/* First path */}
    <Path
      d="M3.125 10.4167H21.875V6.25002C21.875 5.69749 21.6555 5.16758 21.2648 4.77688C20.8741 4.38618 20.3442 4.16669 19.7917 4.16669H5.20833C4.6558 4.16669 4.12589 4.38618 3.73519 4.77688C3.34449 5.16758 3.125 5.69749 3.125 6.25002V20.8334C3.125 21.3859 3.34449 21.9158 3.73519 22.3065C4.12589 22.6972 4.6558 22.9167 5.20833 22.9167H12.5"
      stroke={props.color} // Use dynamic color
      strokeWidth="2.08333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Second path */}
    <Path
      d="M8.33325 2.08331V6.24998"
      stroke={props.color} // Use dynamic color
      strokeWidth="2.08333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Third path */}
    <Path
      d="M16.6667 2.08331V6.24998"
      stroke={props.color} // Use dynamic color
      strokeWidth="2.08333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Fourth path */}
    <Path
      d="M22.177 15.3125C21.822 14.9593 21.3703 14.7193 20.8789 14.6229C20.3876 14.5265 19.8786 14.5779 19.4166 14.7708C19.1041 14.8958 18.8228 15.0833 18.5832 15.3229L18.2291 15.6771L17.8645 15.3229C17.5107 14.9679 17.0595 14.726 16.5681 14.6277C16.0767 14.5294 15.5671 14.5792 15.1041 14.7708C14.7916 14.8958 14.5207 15.0833 14.2811 15.3229C13.2916 16.3021 13.2395 17.9583 14.4895 19.2187L18.2291 22.9166L21.9791 19.2187C23.2291 17.9583 23.1666 16.3021 22.177 15.3229V15.3125Z"
      stroke={props.color} // Use dynamic color
      strokeWidth="2.08333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const PlaneHighlightIcon = (props) => (
  <Svg
    width={props.size || "57"}
    height={props.size || "57"}
    viewBox="0 0 57 57"
    fill="none"
  >
    <Rect
      x="0.75"
      y="0.75"
      width="55.5"
      height="55.5"
      rx="13.75"
      stroke="#E5E7EB"
      strokeWidth="0.5"
    />
    <Path
      d="M35.2667 36.9L33.1667 27.3333L37.25 23.25C39 21.5 39.5833 19.1667 39 18C37.8333 17.4167 35.5 18 33.75 19.75L29.6667 23.8333L20.1 21.7333C19.5167 21.6167 19.05 21.85 18.8167 22.3167L18.4667 22.9C18.2333 23.4833 18.35 24.0667 18.8167 24.4167L25 28.5L22.6667 32H19.1667L18 33.1667L21.5 35.5L23.8333 39L25 37.8333V34.3333L28.5 32L32.5833 38.1833C32.9333 38.65 33.5167 38.7667 34.1 38.5333L34.6833 38.3C35.15 37.95 35.3833 37.4833 35.2667 36.9Z"
      stroke="#374151"
      strokeWidth="2.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
