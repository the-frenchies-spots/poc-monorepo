import React, { useState } from "react";

import {
  Box,
  Flex,
  MapBox,
  MapBoxMarker,
  TCoordinate,
  TViewport,
  useMapBox,
} from "@jf/material";
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
import { CurrentLocationMarker } from "./CurrentLocationMarker/CurrentLocationMarker";

interface MapViewerProps {
  list: JapanLocation[];
  neighborhoods: any;
  currentLocation: JapanLocation | null;
  viewport: TViewport;
  currentPosition: TCoordinate | null;
  onViewportChange?: (newViewport: TViewport) => void;
  onCoordinateClick?: (coordinate: TCoordinate | undefined) => void;
  onLocationChange: (data: JapanLocation) => void;
}

const MapViewer = (props: MapViewerProps) => {
  const {
    list,
    neighborhoods,
    currentLocation,
    currentPosition,
    viewport,
    onViewportChange,
    onCoordinateClick,
    onLocationChange,
  } = props;

  return (
    <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
      <MapBox
        viewport={viewport}
        onViewportChange={onViewportChange}
        onCoordinateClick={onCoordinateClick}
        neighborhoods={neighborhoods}
      >
        {currentPosition && currentPosition.lat && currentPosition.lng && (
          <MapBoxMarker lat={currentPosition.lat} lng={currentPosition.lng}>
            <CurrentLocationMarker />
          </MapBoxMarker>
        )}

        {list.map((location, index) => {
          const isSelected =
            currentLocation &&
            currentLocation.lat === location.lat &&
            currentLocation.lng === location.lng;
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
                    size={isSelected ? 50 : 25}
                  />
                </Flex>
                <Box>
                  <IconMapPinFilled
                    size={isSelected ? 80 : 50}
                    style={{ color: isSelected ? "orange" : "purple" }}
                  />
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
