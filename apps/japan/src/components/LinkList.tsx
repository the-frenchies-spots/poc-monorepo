import { Button, Group, Stack, TextInput } from "@jf/material";
import React, { useEffect, useState } from "react";

interface LinkListProps {
  value: { label: string; link: string }[];
  onChange: (newValue: { label: string; link: string }[]) => void;
}

const LinkList = ({ value, onChange }: LinkListProps) => {
  const [links, setLinks] = useState<any>(value);

  useEffect(() => {
    onChange(links as any);
  }, [links]);

  const handleInputChange = (index: any, event: any, key: any) => {
    const values = [...links];
    values[index][key] = event.target.value as any;
    setLinks(values as any);
  };

  const handleAdd = () => {
    const values = [...links];
    values.push({ label: "", link: "" });
    setLinks(values as any);
  };

  const handleRemove = (index: any) => {
    const values = [...links];
    values.splice(index, 1);
    setLinks(values);
  };

  return (
    <Stack mt="md">
      <Button onClick={handleAdd}>Add Link</Button>
      {links.map((link: any, index: any) => (
        <Group key={index} grow>
          <TextInput
            type="text"
            placeholder="Label"
            value={link.label}
            onChange={(event) => handleInputChange(index, event, "label")}
          />
          <TextInput
            type="text"
            placeholder="Link"
            value={link.link}
            onChange={(event: any) => handleInputChange(index, event, "link")}
          />
          <Button onClick={() => handleRemove(index)}>Remove</Button>
        </Group>
      ))}
    </Stack>
  );
};

export default LinkList;
