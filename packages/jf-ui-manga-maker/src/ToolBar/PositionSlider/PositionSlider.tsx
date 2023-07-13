import React from "react";
import { Box, Text, Slider, Stack, useMantineTheme, Group } from "@jf/material";

interface PositionSliderProps {
  x: number;
  y: number;
  onValueChange: (fieldName: string, value: any) => void;
}

const PositionSlider = (props: PositionSliderProps) => {
  const { x, y, onValueChange } = props;

  const handleSliderChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    const newValue = parseInt(event.target.value, 10);
    onValueChange(fieldName, newValue);
  };

  return (
    <Group pt={64}>
      <Group>
        <Text>{y}</Text>
        <input
          type="range"
          value={y}
          onChange={(e) => handleSliderChange(e, "y")}
          min={-200}
          max={200}
          style={{
            transform: "rotate(-90deg)",
          }}
        />
      </Group>
      <Stack align="center">
        <Text>{x}</Text>
        <input
          type="range"
          value={x}
          onChange={(e) => handleSliderChange(e, "x")}
          min={-200}
          max={200}
        />
      </Stack>
    </Group>
  );
};

export default PositionSlider;
