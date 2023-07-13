import React, { ReactNode } from "react";
import { Divider, Tabs } from "@jf/material";
import { IconFriends, IconMan, IconWoman } from "@jf/icons";

interface GenderTabsProps {
  children: ReactNode;
  malePanel?: ReactNode;
  womanPanel?: ReactNode;
  bothPanel?: ReactNode;
}

const GenderTabs = (props: GenderTabsProps) => {
  const { children, malePanel, womanPanel, bothPanel } = props;

  return (
    <Tabs variant="outline" defaultValue="man" h="100%">
      <Tabs.List>
        {malePanel && (
          <Tabs.Tab value="man" icon={<IconMan size="0.8rem" />}>
            Man
          </Tabs.Tab>
        )}

        {womanPanel && (
          <Tabs.Tab value="woman" icon={<IconWoman size="0.8rem" />}>
            Woman
          </Tabs.Tab>
        )}

        {bothPanel && (
          <Tabs.Tab value="both" icon={<IconFriends size="0.8rem" />}>
            Both
          </Tabs.Tab>
        )}
      </Tabs.List>

      {malePanel && (
        <Tabs.Panel value="man" p={16} h="45%">
          {malePanel}
        </Tabs.Panel>
      )}

      {womanPanel && (
        <Tabs.Panel value="woman" p={16} h="45%">
          {womanPanel}
        </Tabs.Panel>
      )}

      {bothPanel && (
        <Tabs.Panel value="both" p={16} h="45%">
          {bothPanel}
        </Tabs.Panel>
      )}

      {children}
    </Tabs>
  );
};

export default GenderTabs;
