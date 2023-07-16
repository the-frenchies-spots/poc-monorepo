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
  km: string | null;
  onKmChange: (km: string | null) => void;
  currentLocation?: JapanLocation | null;
}

export const Drawer = (props: DrawerProps) => {
  const {
    onTagChange,
    onViewChange,
    view,
    tag,
    km,
    onKmChange,
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
                    { label: "Vue Liste", value: "list" },
                    { label: "Vue Calendrier", value: "calendar" },
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
                  { value: "plane", label: "Avion" },
                  { value: "hotel", label: "Hotel" },
                  { value: "onsen", label: "Onsen" },
                  { value: "neighborhood", label: "Quartier" },
                  { value: "sanctuary", label: "Sanctuaire" },
                  { value: "park", label: "Parc/Jardin" },
                  { value: "activity", label: "Activité" },
                  { value: "restaurant", label: "Restaurant" },
                  { value: "building", label: "Batiment" },
                  { value: "street", label: "Rue" },
                ]}
              />

              <Select
                label="Combien de km autour de moi"
                placeholder="Tout le japon"
                onChange={onKmChange}
                sx={{ width: "100%" }}
                value={km}
                data={[
                  { value: "", label: "Tout le japon" },
                  { value: "1", label: "1km" },
                  { value: "3", label: "3km" },
                  { value: "5", label: "5km" },
                  { value: "10", label: "10km" },
                  { value: "15", label: "15km" },
                  { value: "20", label: "20km" },
                  { value: "25", label: "25km" },
                  { value: "30", label: "30km" },
                  { value: "35", label: "35km" },
                  { value: "40", label: "40km" },
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
            <IconX /> FERMER
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
