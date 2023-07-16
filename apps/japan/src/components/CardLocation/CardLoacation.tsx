import { IconInfoHexagon, IconMapPin } from "@jf/icons";
import { Badge, Button, Card, Group, Image, Text } from "@jf/material";
import React from "react";
import { JapanLocation } from "../../assets/japanData";

const CardLoacation = ({ data }: { data: JapanLocation }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={data.picture} height={160} alt="Norway" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{data.name}</Text>
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
          key={index}
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
