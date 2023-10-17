import React from "react";

interface SvgProps {
  fill?: string;
  size?: number;
  viewBox?: string;
  style?: React.CSSProperties;
}

export const MapPinBase = ({
  fill = "#000000",
  size = 80,
  viewBox = "0 0 368.553 368.553",
  style = {},
}: SvgProps) => <></>;
