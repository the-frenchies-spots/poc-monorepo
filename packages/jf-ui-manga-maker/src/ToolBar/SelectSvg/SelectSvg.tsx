import React, { useMemo, useState } from "react";

import { TSvgElement } from "@jf/types";
import {
  Card,
  Flex,
  Grid,
  TextInput,
  Image,
  Stack,
  Text,
  ScrollArea,
} from "@jf/material";

interface SelectSvgProps {
  rows: TSvgElement[];
  value: TSvgElement | undefined;
  onChange: (svgElement: TSvgElement | undefined) => void;
}

const SelectSvg = (props: SelectSvgProps) => {
  const { rows, value, onChange } = props;
  const [search, setSearch] = useState<string>("");
  const rowsData = useMemo(
    () => rows.filter((row) => row.name?.includes(search)),
    [rows, search]
  );

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value: inputValue } = e.target;
    setSearch(inputValue);
  };

  return (
    <Stack h="100%">
      <TextInput
        placeholder="head name.."
        label="Search"
        value={search}
        onChange={handleChange}
      />
      <ScrollArea
        sx={{ border: "1px solid #CED4DA", borderRadius: 8 }}
        p={8}
        h="100%"
      >
        <Grid h="100%">
          <Grid.Col xs={4}>
            <Card
              shadow="sm"
              onClick={() => onChange(undefined)}
              sx={value === undefined ? { border: "1px solid" } : {}}
            >
              <Flex justify="center">
                <Text weight={500}>Nothing</Text>
              </Flex>
            </Card>
          </Grid.Col>

          {rows.map((row) => {
            const { id, name, path } = row;
            return (
              <Grid.Col xs={4} key={id}>
                <Card
                  shadow="sm"
                  onClick={() => onChange(row)}
                  sx={value?.id === id ? { border: "1px solid" } : {}}
                >
                  <Image src={path} alt={name} />
                  <Flex justify="center">
                    <Text weight={500}>{name}</Text>
                  </Flex>
                </Card>
              </Grid.Col>
            );
          })}
        </Grid>
      </ScrollArea>
    </Stack>
  );
};

export default SelectSvg;
