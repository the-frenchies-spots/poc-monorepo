import React from "react";

import { Box, Slider, Stack, Text, NumberControl } from "@jf/material";
import { TSvgElement } from "@jf/types";

interface ProportionSliderProps {
  value: TSvgElement;
  onProportionChange: (fieldName: string, value: any) => void;
  onIncrementZoom: (zoom: number) => void;
  onDecrementZoom: (zoom: number) => void;
}

const ProportionSlider = (props: ProportionSliderProps) => {
  const {
    value: svg,
    onProportionChange,
    onIncrementZoom,
    onDecrementZoom,
  } = props;
  const { width, height } = svg;

  return (
    <Stack>
      <Box>
        <Text>Global Size</Text>
        <NumberControl
          value={(width + height) / 2}
          onIncrementChange={onIncrementZoom}
          onDecrementChange={onDecrementZoom}
          max={100}
          min={0}
        />
      </Box>

      <Box>
        <Text>Width</Text>
        <Slider
          value={width}
          onChange={(newWidth) => onProportionChange("width", newWidth)}
          marks={[
            { value: 0, label: "0%" },
            { value: 25, label: "25%" },
            { value: 50, label: "50%" },
            { value: 75, label: "75%" },
            { value: 100, label: "100%" },
          ]}
        />
      </Box>

      <Box>
        <Text>Height</Text>
        <Slider
          value={height}
          onChange={(newHeight) => onProportionChange("height", newHeight)}
          marks={[
            { value: 0, label: "0%" },
            { value: 25, label: "25%" },
            { value: 50, label: "50%" },
            { value: 75, label: "75%" },
            { value: 100, label: "100%" },
          ]}
        />
      </Box>
    </Stack>
  );
};

export default ProportionSlider;
