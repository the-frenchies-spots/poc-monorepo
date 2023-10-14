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
    setList((current) => [...current, form.values]);
    form.reset();
  };

  const downloadJsonFile = () => {
    const myObject = { key: "value" }; // Votre objet JavaScript à télécharger

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
        data={[
          { value: "plane", label: "Avion" },
          { value: "hotel", label: "Hotel" },
          { value: "onsen", label: "Onsen" },
          { value: "neighborhood", label: "Quartier" },
          { value: "sanctuary", label: "Sanctuaire" },
          { value: "park", label: "Parc/Jardin" },
          { value: "activity", label: "Activité" },
          { value: "restaurant", label: "Restaurant" },
          { value: "building", label: "Batiment" },
          { value: "monument", label: "Monument" },
          { value: "street", label: "Rue" },
          { value: "island", label: "Île" },
        ]}
      />

      <LinkList {...form.getInputProps("links")} />

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
