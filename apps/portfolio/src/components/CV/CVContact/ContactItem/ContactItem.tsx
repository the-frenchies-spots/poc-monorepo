import { Stack, Text } from "@jf/material";
import { IconMail, TablerIconsProps } from "@jf/icons";

import React from "react";

interface ContactItemProps {
  value: string;
  Icon: (props: TablerIconsProps) => JSX.Element;
}

const ContactItem = (props: ContactItemProps) => {
  const { Icon, value } = props;

  return (
    <Stack justify="center" align="center" spacing={5}>
      <Icon style={{ color: "white" }} />
      <Text ta="center" ff="Montserrat" fz={14} fs="normal" fw={400} c="white">
        {value}
      </Text>
    </Stack>
  );
};

export default ContactItem;
