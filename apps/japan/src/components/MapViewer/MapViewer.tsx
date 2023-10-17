import React from "react";

import {
  Box,
  MapBox,
  MapBoxMarker,
  TCoordinate,
  TViewport,
} from "@jf/material";
import { MapPinDefault } from "@jf/icons";

import { JapanLocation } from "../../assets/japanData";
import { CurrentLocationMarker } from "./CurrentLocationMarker/CurrentLocationMarker";

import { tagList } from "../../utils/tagList";

interface MapViewerProps {
  list: JapanLocation[];
  neighborhoods: any;
  currentLocation: JapanLocation | null;
  viewport: TViewport;
  japanData: any;
  km: string | null;
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
    japanData,
    km,
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
        japanData={japanData}
        currentPosition={currentPosition}
        km={km}
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

          let Icon = MapPinDefault;
          const tagExist = tagList.find((tag) => tag.value === location.tag);
          if (tagExist) {
            Icon = tagExist.icon;
          }

          return (
            <MapBoxMarker
              key={index}
              lat={location?.lat || 0}
              lng={location?.lng || 0}
              onPress={() => onLocationChange(location)}
            >
              <Icon
                size={isSelected ? 80 : 50}
                fill={isSelected ? "orange" : "white"}
              />
            </MapBoxMarker>
          );
        })}
      </MapBox>
    </Box>
  );
};

export default MapViewer;
