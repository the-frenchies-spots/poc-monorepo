import {
  Box,
  Button,
  ColorPicker,
  Container,
  FileButton,
  Group,
  Image,
  LoadingOverlay,
  Select,
  Stack,
  TCoordinate,
  Text,
  TextInput,
  Textarea,
  useForm,
} from "@jf/material";
import React, { useEffect, useState } from "react";
import { tagList } from "../../utils/tagList";
import { callLambdaInNext } from "../../utils/fetcher";
import { MarkerCustom } from "../ListCustom/marker";

interface SpotFormProps {
  coordinates: TCoordinate;
  onClose: () => void;
  refetch: () => void;
}

type spotType = {
  _id: string;
  tag: string;
  color: string;
  name: string;
  description: string;
  picture: string;
  lat: number;
  lng: number;
};

const SpotForm = (props: SpotFormProps) => {
  const { coordinates, refetch, onClose } = props;

  const [image, setImage] = useState<string | null>(null);
  const [base64, setBase64] = useState<string | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  const handleFileChange = async (payload: File | null) => {
    if (payload) {
      const blob = await payload.arrayBuffer();

      const base64 = `data:${payload.type};base64,${btoa(
        new Uint8Array(blob).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      )}`;

      setBase64(base64);

      const imageURL = URL.createObjectURL(payload);
      setImage(imageURL);
    }
  };

  const uploadImage = async (base64: string) => {
    const formData = new FormData();
    formData.append("file", base64);
    formData.append("upload_preset", "upload-spots");
    formData.append(
      "cloud_name",
      `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`
    );
    formData.append("folder", `japan`);

    const result: any = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "post",
        body: formData,
      }
    ).then((response) => response?.json());

    return result;
  };

  const form = useForm<Omit<spotType, "_id">>({
    initialValues: {
      name: "",
      description: "",
      picture: "",
      tag: "activity",
      lat: coordinates.lat,
      lng: coordinates.lng,
      color: "yellow",
    },
  });

  const handleSave = async () => {
    setVisible(true);
    let url: any = "";
    if (base64) {
      url = await uploadImage(base64);
    }

    callLambdaInNext("/create", "POST", {
      ...form.values,
      picture: url?.secure_url,
    })
      .then((data) => {
        setVisible(false);
        refetch();
        onClose();
      })
      .catch((error) => {
        setVisible(false);
        onClose();
      });
  };

  return (
    <Container size="md" h="100%">
      <LoadingOverlay visible={visible} zIndex={1000} />
      <Stack justify="space-between" h="100%">
        <Select
          label="Tag"
          placeholder="Choisit un tag"
          {...form.getInputProps("tag")}
          sx={{ width: "100%" }}
          data={tagList}
        />
        <Group position="center">
          <MarkerCustom item={{ ...form.values, _id: "" }} />
        </Group>
        <ColorPicker w="100%" format="hex" {...form.getInputProps("color")} />

        <TextInput
          withAsterisk
          label="name"
          placeholder="name"
          {...form.getInputProps("name")}
        />

        <Textarea
          withAsterisk
          label="description"
          placeholder="description"
          {...form.getInputProps("description")}
        />

        <Group>
          <Box w="40%">
            <FileButton onChange={handleFileChange} accept="*">
              {(props) => <Button {...props}>Upload image</Button>}
            </FileButton>
          </Box>
          {image && (
            <Box w="40%" sx={{ borderRadius: 25, overflow: "hidden" }}>
              <Image src={image} alt="Uploaded" />
            </Box>
          )}
        </Group>

        <Button mt="md" w="100%" onClick={handleSave}>
          Enregistré le spot !
        </Button>
      </Stack>
    </Container>
  );
};

export default SpotForm;
