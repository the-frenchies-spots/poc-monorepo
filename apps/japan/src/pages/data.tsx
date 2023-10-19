import {
  Button,
  Container,
  Group,
  Select,
  Stack,
  TextInput,
  useForm,
} from "@jf/material";
import React, { useState } from "react";
import { JapanLocation } from "../assets/japanData";
import LinkList from "../components/LinkList";
import { tagList } from "../utils/tagList";

function generateRandomUUID(): string {
  let dt = new Date().getTime();
  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      const r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
}

interface DataProps {}

const Data = (props: DataProps) => {
  const [list, setList] = useState<JapanLocation[]>([]);

  const form = useForm<JapanLocation>({
    initialValues: {
      id: "",
      name: "",
      description: "",
      picture: "",
      tag: "activity",
      city: "",
      address: "",
      links: [],
      lat: 0,
      lng: 0,
      price: "0",
    },
  });

  const handleClick = () => {
    setList((current) => [
      ...current,
      {
        ...form.values,
        id: generateRandomUUID(),
        lat: +(form?.values?.lat || 0),
        lng: +(form?.values?.lng || 0),
      },
    ]);
    form.reset();
  };

  const downloadJsonFile = () => {
    const myObject = { key: "value" };
    const json = JSON.stringify(list);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.download = "data.json";
    link.href = url;
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <Container size="md">
      <TextInput
        withAsterisk
        label="name"
        placeholder="name"
        {...form.getInputProps("name")}
      />

      <TextInput
        withAsterisk
        label="description"
        placeholder="description"
        {...form.getInputProps("description")}
      />

      <TextInput
        withAsterisk
        label="picture"
        placeholder="picture"
        {...form.getInputProps("picture")}
      />

      <Select
        label="Tag"
        placeholder="Choisit un tag"
        {...form.getInputProps("tag")}
        sx={{ width: "100%" }}
        data={tagList}
      />

      <LinkList {...form.getInputProps("links")} />

      <TextInput
        withAsterisk
        label="city"
        placeholder="city"
        {...form.getInputProps("city")}
      />

      <TextInput
        withAsterisk
        label="address"
        placeholder="address"
        {...form.getInputProps("address")}
      />

      <Group grow>
        <TextInput
          withAsterisk
          label="lat"
          placeholder="lat"
          {...form.getInputProps("lat")}
        />
        <TextInput
          withAsterisk
          label="lng"
          placeholder="lng"
          {...form.getInputProps("lng")}
        />
      </Group>

      <TextInput
        label="price"
        placeholder="price"
        {...form.getInputProps("price")}
      />

      <Stack>
        <Button onClick={handleClick} mt="md">
          Enregistré le spot !
        </Button>

        <Button onClick={downloadJsonFile} mt="md" variant="outline">
          Télécharger le fichier
        </Button>
      </Stack>

      <pre>
        <code>{JSON.stringify(list, null, 2)}</code>
      </pre>
    </Container>
  );
};

export default Data;
