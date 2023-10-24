import { IconInfoHexagon, IconMapPin } from "@jf/icons";
import {
  Badge,
  Button,
  Card,
  Checkbox,
  Group,
  Image,
  LoadingOverlay,
  Stack,
  Text,
} from "@jf/material";
import React from "react";
import { JapanLocation } from "../../assets/japanData";

const CardLoacation = ({
  data,
  insertCheck,
  unChecked,
  checkId,
  checked,
  checkLoading,
}: {
  data: JapanLocation;
  checkId: string;
  insertCheck: (id: string) => void;
  unChecked: (id: string) => void;
  checked: boolean;
  checkLoading: boolean;
}) => {
  const handleCheck = () => {
    if (!checkLoading) {
      if (!checked) {
        insertCheck(data.id);
      } else {
        unChecked(checkId);
      }
    }
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section sx={{ position: "relative" }}>
        <Checkbox
          color="teal"
          size="xl"
          checked={checked}
          onClick={handleCheck}
          sx={{
            position: "absolute",
            zIndex: 1000,
            bottom: 0,
            right: 0,
            border: "2px solid green",
            borderRadius: 5,
          }}
        />
        <Image src={data.picture} height={160} alt="Norway" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Stack>
          <Text weight={500}>{data.name}</Text>
        </Stack>
        <Group>
          <Badge color="pink" variant="light">
            {data.city}
          </Badge>
          <Badge color="pink" variant="light">
            {data.tag}
          </Badge>
          <Badge color="pink" variant="light">
            {data.price}
          </Badge>
        </Group>
      </Group>

      <Text size="sm" color="dimmed">
        {data.description}
      </Text>
      {data.links?.map((dataLink, index) => (
        <Button
          key={`${
            index + Math.floor(Math.random() * (583486438 - 9698 + 1)) + 9698
          }`}
          component="a"
          variant="light"
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          target="_blank"
          href={dataLink.link}
          sx={{ width: "fit-content" }}
        >
          <IconInfoHexagon /> &nbsp; {dataLink.label}
        </Button>
      ))}
      <Button
        component="a"
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        target="_blank"
        href={`https://www.google.com/maps/search/?api=1&query=${data.address}`}
      >
        <IconMapPin /> &nbsp; Google Map
      </Button>
    </Card>
  );
};

export default CardLoacation;
