import { Badge, Button, Card, Grid, Group, Image, Text } from "@jf/material";
import React, { useState } from "react";
import { JapanLocation, japanData } from "./japanData";
import { IconMapPin } from "@jf/icons";

interface LocationCardListProps {
  tag: string;
}

export const LocationCardList = (props: LocationCardListProps) => {
  const { tag } = props;

  return (
    <Grid>
      {japanData
        .filter((japanLocation) => {
          return japanLocation.tag.includes(tag);
        })
        .map((japanLocation, key) => {
          const { name, description, city, tag, picture, links, address } =
            japanLocation;
          return (
            <Grid.Col key={key} sm={12} md={4}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Image src={picture} height={160} alt="Norway" />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>{name}</Text>
                  <Group>
                    <Badge color="pink" variant="light">
                      {city}
                    </Badge>
                    <Badge color="pink" variant="light">
                      {tag}
                    </Badge>
                    <Badge color="pink" variant="light">
                      {japanLocation.price}
                    </Badge>
                  </Group>
                </Group>

                <Text size="sm" color="dimmed">
                  {description}
                </Text>
                <Button
                  component="a"
                  variant="light"
                  color="blue"
                  fullWidth
                  mt="md"
                  radius="md"
                  href={`https://www.google.com/maps/search/?api=1&query=${address}`}
                >
                  <IconMapPin /> &nbsp; Google Map
                </Button>
              </Card>
            </Grid.Col>
          );
        })}
    </Grid>
  );
};
