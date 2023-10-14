import { Button, Group, Stack, TextInput } from "@jf/material";
import React, { useEffect, useState } from "react";

interface LinkListProps {
  value: { label: string; link: string }[];
  onChange: (newValue: { label: string; link: string }[]) => void;
}

const LinkList = ({ value, onChange }: LinkListProps) => {
  const [links, setLinks] = useState(value);

  useEffect(() => {
    onChange(links);
  }, [links]);

  const handleInputChange = (index, event, key) => {
    const values = [...links];
    values[index][key] = event.target.value;
    setLinks(values);
  };

  const handleAdd = () => {
    const values = [...links];
    values.push({ label: "", link: "" });
    setLinks(values);
  };

  const handleRemove = (index) => {
    const values = [...links];
    values.splice(index, 1);
    setLinks(values);
  };

  return (
    <Stack mt="md">
      <Button onClick={handleAdd}>Add Link</Button>
      {links.map((link, index) => (
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
            onChange={(event) => handleInputChange(index, event, "link")}
          />
          <Button onClick={() => handleRemove(index)}>Remove</Button>
        </Group>
      ))}
    </Stack>
  );
};

export default LinkList;
