import React from "react";
import { IBikeCycleJapan } from "../../utils/bike-cycle";
import { Accordion, Box, Button, List, Stack } from "@jf/material";
import MonserattText from "../Text/MonserattText";
import { IconBike } from "@jf/icons";

interface ByceCycleListProps {
  row: IBikeCycleJapan[];
}

const ByceCycleList = ({ row }: ByceCycleListProps) => {
  return (
    <>
      <Accordion defaultValue={row[0].label}>
        {row.map((cycleCompagny, index) => {
          return (
            <Accordion.Item
              value={cycleCompagny.label}
              key={`actuion-item${index}`}
            >
              <Accordion.Control>{cycleCompagny.label}</Accordion.Control>
              <Accordion.Panel w="100%">
                <Stack w="100%">
                  {cycleCompagny.value.map((val, idx) => (
                    <Button
                      leftIcon={<IconBike />}
                      variant="outline"
                      component="a"
                      key={`list-a-37-${idx}`}
                      href={val.link}
                      mt="xl"
                      w="100%"
                    >
                      <MonserattText tt="uppercase">{val.label}</MonserattText>
                    </Button>
                  ))}
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </>
  );
};

export default ByceCycleList;
