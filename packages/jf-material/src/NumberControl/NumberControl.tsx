import { useState, useRef, useEffect } from "react";
import {
  NumberInput,
  NumberInputProps,
  Group,
  ActionIcon,
  NumberInputHandlers,
  rem,
} from "@mantine/core";

interface NumberControlProps extends NumberInputProps {
  value?: number;
  onIncrementChange?: (value: number) => void;
  onDecrementChange?: (value: number) => void;
}

export const NumberControl = (props: NumberControlProps) => {
  const {
    value: initValue = 0,
    onIncrementChange,
    onDecrementChange,
    ...other
  } = props;

  const [value, setValue] = useState<number>(initValue);
  const handlers = useRef<NumberInputHandlers>();

  useEffect(() => {
    setValue(initValue);
  }, [initValue]);

  const handleIncrement = () => {
    handlers?.current?.increment();
    if (typeof onIncrementChange === "function") {
      onIncrementChange(value + 1);
    }
  };
  const handleDecrement = () => {
    handlers?.current?.decrement();
    if (typeof onDecrementChange === "function") {
      onDecrementChange(value - 1);
    }
  };

  return (
    <Group spacing={5}>
      <ActionIcon size={42} variant="default" onClick={handleDecrement}>
        –
      </ActionIcon>

      <NumberInput
        readOnly
        hideControls
        value={value}
        onChange={(val: number) => setValue(val)}
        handlersRef={handlers}
        styles={{
          input: { width: rem(54), textAlign: "center", height: 42 },
        }}
        {...other}
      />

      <ActionIcon size={42} variant="default" onClick={handleIncrement}>
        +
      </ActionIcon>
    </Group>
  );
};
