import React from "react";

import { Box, Stack, Text, Tabs } from "@jf/material";
import { IconMoodNeutral } from "@jf/icons";

// ----------------------------------------------------------------

import CustomMangaForms from "./MangaForms/CustomMangaForms/CustomMangaForms";

const ToolBar = () => {
  return (
    <Box sx={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      <Tabs defaultValue="head" orientation="vertical" h="100%">
        <Tabs.List>
          <Tabs.Tab value="head">
            <Stack align="center">
              <IconMoodNeutral />
              <Text>Head</Text>
            </Stack>
          </Tabs.Tab>
          <Tabs.Tab value="eyes">
            <Stack align="center">
              <IconMoodNeutral />
              <Text>Eyes</Text>
            </Stack>
          </Tabs.Tab>
          <Tabs.Tab value="nose">
            <Stack align="center">
              <IconMoodNeutral />
              <Text>Nose</Text>
            </Stack>
          </Tabs.Tab>
          <Tabs.Tab value="mouth">
            <Stack align="center">
              <IconMoodNeutral />
              <Text>Mouth</Text>
            </Stack>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="head">
          <CustomMangaForms typeOf="head" />
        </Tabs.Panel>
        <Tabs.Panel value="eyes"> Nothing yet</Tabs.Panel>
        <Tabs.Panel value="nose">
          <CustomMangaForms typeOf="nose" />
        </Tabs.Panel>
        <Tabs.Panel value="mouth">
          <CustomMangaForms typeOf="mouth" />
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
};

export default ToolBar;
