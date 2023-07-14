import React, { ReactNode } from "react";
import { Marker } from "react-map-gl";
require("dotenv").config();
interface MapBoxMarkerProps {
  lat: number;
  lng: number;
  onPress?: () => void;
  children?: ReactNode;
}

export const MapBoxMarker = (props: MapBoxMarkerProps) => {
  const { lat, lng, children, onPress } = props;
  return (
    <Marker latitude={lat} longitude={lng} onClick={onPress}>
      {children}
    </Marker>
  );
};
