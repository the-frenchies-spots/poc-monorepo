import React, { CSSProperties } from "react";
import { spotType } from "../../utils/spotCustomType";
import { tagList } from "../../utils/tagList";
import { Box, Group } from "@jf/material";

interface MarkerCustomProps {
  style?: CSSProperties;
  item: spotType;
}

export const MarkerCustom = ({ style, item }: MarkerCustomProps) => {
  const { tag } = item;

  const currentTag = tagList.find((it) => it.value === item.tag);
  return (
    <Box sx={{ position: "relative" }}>
      {currentTag && (
        <currentTag.defaultIcon
          style={{
            position: "absolute",
            marginTop: 7,
            marginLeft: 7,
          }}
        />
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width={38}
        height={50}
        viewBox="0 0 564 800" // Ajout de la propriété viewBox
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          fillRule: "evenodd",
          clipRule: "evenodd",

          ...style,
        }}
        preserveAspectRatio="none"
      >
        <g>
          <path
            style={{ opacity: 1 }}
            fill="#040404"
            d="M 262.5,-0.5 C 275.167,-0.5 287.833,-0.5 300.5,-0.5C 408.654,10.9727 487.487,64.9727 537,161.5C 551.909,193.701 560.742,227.368 563.5,262.5C 563.5,275.5 563.5,288.5 563.5,301.5C 559.116,337.038 550.616,371.705 538,405.5C 522.384,446.067 504.051,485.4 483,523.5C 428.639,617.913 366.639,706.913 297,790.5C 293.817,794.538 289.984,797.538 285.5,799.5C 282.833,799.5 280.167,799.5 277.5,799.5C 270.637,795.478 264.803,790.144 260,783.5C 193.999,701.86 134.666,615.527 82,524.5C 55.3698,477.573 33.3698,428.573 16,377.5C 8.1086,352.2 2.6086,326.533 -0.5,300.5C -0.5,287.833 -0.5,275.167 -0.5,262.5C 10.9629,154.373 64.9629,75.5398 161.5,26C 193.77,11.3506 227.437,2.51729 262.5,-0.5 Z"
          />
        </g>
        <g>
          <path
            style={{ opacity: 1 }}
            fill={item.color}
            d="M 262.5,32.5 C 355.794,29.0708 430.294,64.4041 486,138.5C 533.205,210.132 543.205,286.799 516,368.5C 502.506,409.644 485.506,449.31 465,487.5C 412.226,583.099 351.059,672.766 281.5,756.5C 203.407,661.732 136.24,559.399 80,449.5C 62.5779,413.569 48.9112,376.236 39,337.5C 22.043,257.249 39.043,185.249 90,121.5C 135.72,69.2218 193.22,39.5551 262.5,32.5 Z"
          />
        </g>
      </svg>
    </Box>
  );
};
