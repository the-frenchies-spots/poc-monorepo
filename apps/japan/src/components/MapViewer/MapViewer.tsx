import React, { useState } from "react";

import { Box, Flex, MapBox, MapBoxMarker, useMapBox } from "@jf/material";
import {
  IconBuilding,
  IconBuildingSkyscraper,
  IconCurrencyYen,
  IconFlower,
  IconGolf,
  IconMapPinFilled,
  IconRoad,
  IconToolsKitchen2,
  IconTorii,
} from "@jf/icons";

import { JapanLocation } from "../../assets/japanData";

interface MapViewerProps {
  list: JapanLocation[];
  neighborhoods: any;
  onLocationChange: (data: JapanLocation) => void;
}

const MapViewer = (props: MapViewerProps) => {
  const { list, neighborhoods, onLocationChange } = props;

  const [fetch, { viewport, onViewportChange, onCoordinateClick }] =
    useMapBox();

  return (
    <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
      <MapBox
        viewport={viewport}
        onViewportChange={onViewportChange}
        onCoordinateClick={onCoordinateClick}
        neighborhoods={neighborhoods}
      >
        {/* {currentLocation && currentLocation.lat && currentLocation.lng && (
        <LocationMarker lat={currentLocation.lat} lng={currentLocation.lng} />
      )} */}

        {list.map((location, index) => {
          let Icon = IconCurrencyYen;

          switch (location.tag) {
            case "restaurant":
              Icon = IconToolsKitchen2;
              break;
            case "neighborhood":
              Icon = IconBuildingSkyscraper;
              break;
            case "sanctuary":
              Icon = IconTorii;
              break;
            case "park":
              Icon = IconFlower;
              break;
            case "activity":
              Icon = IconGolf;
              break;
            case "building":
              Icon = IconBuilding;
              break;
            case "street":
              Icon = IconRoad;
              break;
            default:
              Icon = IconCurrencyYen;
          }

          return (
            <MapBoxMarker
              key={index}
              lat={location?.lat || 0}
              lng={location?.lng || 0}
              onPress={() => onLocationChange(location)}
            >
              <Box sx={{ position: "relative" }}>
                <Flex
                  sx={{
                    position: "absolute",

                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }}
                  justify="center"
                >
                  <Icon
                    style={{
                      color: "black",
                      backgroundColor: "white",
                      borderRadius: 50,
                      border: "1px solid",
                      marginTop: 9,
                    }}
                    size={25}
                  />
                </Flex>
                <Box>
                  <IconMapPinFilled size={50} style={{ color: "purple" }} />
                </Box>
              </Box>
            </MapBoxMarker>
          );
        })}
      </MapBox>
    </Box>
  );
};

export default MapViewer;
