import {
  IconBatteryAutomotive,
  IconBook,
  IconMusic,
  IconPlaylistOff,
  IconPlug,
} from "@jf/icons";
import { Group, List } from "@jf/material";
import React from "react";

export const ListRappel = () => {
  return (
    <List p="xl">
      <List.Item>
        <Group>
          <IconPlug /> Adaptateur prise japon * 2
        </Group>
      </List.Item>
      <List.Item>
        <Group>
          <IconMusic /> Adaptateur double jack{" "}
        </Group>
      </List.Item>
      <List.Item>
        <Group>
          <IconBatteryAutomotive /> Batterie extern * 2{" "}
        </Group>
      </List.Item>
      <List.Item>
        <Group>
          <IconPlaylistOff /> Paire de boules quies
        </Group>
      </List.Item>
      <List.Item>
        <Group>
          <IconBook /> Livret des formulation importantes au japon (demander son
          chemin, toilette, etc...)
        </Group>
      </List.Item>
    </List>
  );
};

export default ListRappel;
