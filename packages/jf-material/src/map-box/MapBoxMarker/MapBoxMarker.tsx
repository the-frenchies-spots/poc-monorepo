import React, { CSSProperties, ReactNode } from "react";
import { Marker } from "react-map-gl";
import { MarkerEvent } from "react-map-gl/dist/esm/types";
require("dotenv").config();
interface MapBoxMarkerProps {
  lat: number;
  lng: number;
  onPress?: () => void;
  children?: ReactNode;
  style?: CSSProperties;
  isDefaultCursor?: boolean;
}

export const MapBoxMarker = (props: MapBoxMarkerProps) => {
  const { lat, lng, children, style, isDefaultCursor = true, onPress } = props;

  const handleClick: (e: MarkerEvent<mapboxgl.Marker, MouseEvent>) => void = (
    e
  ) => {
    e.originalEvent.stopPropagation();
    if (typeof onPress === "function") {
      onPress();
    }
  };

  return (
    <>
      {isDefaultCursor && <Marker latitude={lat} longitude={lng} />}
      <Marker
        latitude={lat}
        longitude={lng}
        style={style}
        onClick={handleClick}
      >
        {children}
      </Marker>
    </>
  );
};
