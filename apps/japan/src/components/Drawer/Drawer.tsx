import { IconMenu2, IconX } from "@jf/icons";
import {
  useDisclosure,
  Drawer as MantineDrawer,
  ActionIcon,
  Box,
  Select,
  Divider,
  SegmentedControl,
  Flex,
  Button,
} from "@jf/material";
import React from "react";
import { JapanLocation } from "../../assets/japanData";
import CardLoacation from "../CardLocation/CardLoacation";

interface DrawerProps {
  onTagChange: (val: string) => void;
  onViewChange: (val: string) => void;
  onCurrentLocationChange: (val: JapanLocation | null) => void;
  view: string;
  tag: string;
  currentLocation?: JapanLocation | null;
}

export const Drawer = (props: DrawerProps) => {
  const {
    onTagChange,
    onViewChange,
    view,
    tag,
    currentLocation = null,
    onCurrentLocationChange,
  } = props;

  const [opened, { open, close }] = useDisclosure(false);

  const handleClose = () => {
    close();
    onCurrentLocationChange(null);
  };

  return (
    <>
      {(opened || currentLocation !== null) && (
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: 200,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            border: "1px solid gray",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
            backgroundColor: "white",
          }}
          p="xl"
        >
          {currentLocation !== null ? (
            <CardLoacation data={currentLocation} />
          ) : (
            <>
              <Flex justify="center">
                <SegmentedControl
                  value={view}
                  onChange={onViewChange}
                  data={[
                    { label: "Vue Carte", value: "map" },
                    { label: "Vue List", value: "list" },
                  ]}
                />
              </Flex>
              <Select
                label="Tag"
                placeholder="Choisit un tag"
                onChange={onTagChange}
                sx={{ width: "100%" }}
                value={tag}
                data={[
                  { value: "", label: "Tout" },
                  { value: "neighborhood", label: "Quartier" },
                  { value: "sanctuary", label: "Sanctuaire" },
                  { value: "park", label: "Parc/Jardin" },
                  { value: "activity", label: "Activité" },
                  { value: "restaurant", label: "Restaurant" },
                  { value: "building", label: "Batiment" },
                  { value: "street", label: "Rue" },
                ]}
              />
            </>
          )}

          <Divider py="sm" />
          <Button
            w="100%"
            variant="gradient"
            gradient={{ from: "teal", to: "blue", deg: 60 }}
            onClick={handleClose}
          >
            <IconX /> FERMÉ
          </Button>
        </Box>
      )}

      <Box
        p="md"
        m="xl"
        sx={{
          position: "fixed",
          bottom: 0,
          right: 0,
          zIndex: 100,
          borderRadius: 50,
          border: "1px solid gray",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
          backgroundColor: "white",
        }}
      >
        <ActionIcon onClick={open}>
          <IconMenu2 size="1.125rem" />
        </ActionIcon>
      </Box>
    </>
  );
};
