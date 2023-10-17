import { Contact } from "@/utils/data/type";
import { Stack, Text } from "@jf/material";
import React from "react";
import ContactItem from "./ContactItem/ContactItem";
import { IconHome, IconMail, IconPhone } from "@jf/icons";

interface CVContactProps {
  contact: Contact;
}

const CVContact = ({ contact }: CVContactProps) => {
  const { label, email, phone, address } = contact;
  return (
    <Stack p="md" spacing={50}>
      <Text
        sx={{ textDecoration: "underline" }}
        ta="center"
        ff="Montserrat"
        fz={24}
        fs="normal"
        fw={400}
        c="white"
      >
        {label}
      </Text>
      <ContactItem value={email} Icon={IconMail} />
      <ContactItem value={phone} Icon={IconPhone} />
      <ContactItem value={address} Icon={IconHome} />
    </Stack>
  );
};

export default CVContact;
