import React, { ReactNode } from "react";
import { Tabs } from "@jf/material";
import { IconResize, IconArrowsRandom } from "@jf/icons";

interface ParamsTabsProps {
  resizePanel?: ReactNode;
  positionPanel?: ReactNode;
}

const ParamsTabs = (props: ParamsTabsProps) => {
  const { resizePanel, positionPanel } = props;

  return (
    <Tabs variant="outline" defaultValue="resize" h="100%">
      <Tabs.List>
        {resizePanel && (
          <Tabs.Tab value="resize" icon={<IconResize size="0.8rem" />}>
            Resize
          </Tabs.Tab>
        )}

        {positionPanel && (
          <Tabs.Tab value="position" icon={<IconArrowsRandom size="0.8rem" />}>
            Position
          </Tabs.Tab>
        )}
      </Tabs.List>

      {resizePanel && (
        <Tabs.Panel value="resize" p={16} h="45%">
          {resizePanel}
        </Tabs.Panel>
      )}

      {positionPanel && (
        <Tabs.Panel value="position" p={16} h="45%">
          {positionPanel}
        </Tabs.Panel>
      )}
    </Tabs>
  );
};

export default ParamsTabs;
