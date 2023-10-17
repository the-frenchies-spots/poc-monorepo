import React, { CSSProperties, ReactNode } from "react";
import { Marker } from "react-map-gl";
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
  return (
    <>
      {isDefaultCursor && <Marker latitude={lat} longitude={lng} />}
      <Marker latitude={lat} longitude={lng} style={style} onClick={onPress}>
        {children}
      </Marker>
    </>
  );
};
