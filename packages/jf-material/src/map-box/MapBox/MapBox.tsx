import React, { useState, useRef, type ReactNode } from "react";
require("dotenv").config();
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL, { Layer, Marker, Popup, Source } from "react-map-gl";
import { TViewport } from "../viewport-type";
import { TCoordinate } from "../coordinate-type";
import { Text } from "@mantine/core";
import DetectionCircle from "./DetectionCircle";

const labels = [
  { id: 1, lat: 35.698763, lng: 139.711656, name: "Shinjuku" },
  { id: 2, lat: 35.665243, lng: 139.697103, name: "SHIBUYA" },
  { id: 3, lat: 35.715977, lng: 139.782562, name: "UENO" },
  { id: 4, lat: 35.694653, lng: 139.756662, name: "Akihabara" },
  { id: 5, lat: 35.670995, lng: 139.779234, name: "TSUKIJI" },
  { id: 6, lat: 35.731218, lng: 139.715321, name: "IKEBUKURO" },
  { id: 7, lat: 35.622617, lng: 139.790518, name: "Odaiba" },
  { id: 8, lat: 35.714452, lng: 139.666402, name: "Nakano" },
  { id: 9, lat: 35.663072, lng: 139.745454, name: "MINATO" },
];

// 35.663072, 139.745454

interface MapBoxProps {
  viewport: TViewport;
  onViewportChange?: (newViewport: TViewport) => void;
  onCoordinateClick?: (coordinate: TCoordinate | undefined) => void;
  children?: ReactNode;
  neighborhoods?: any;
  km: number | null;
}

export const MapBox = (props: MapBoxProps) => {
  const {
    children,
    viewport,
    neighborhoods = null,
    km,
    onViewportChange,
    onCoordinateClick,
  } = props;
  const [loaded, setLoaded] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(null);
  const mapRef: any = useRef();

  const handleViewportChange = (viewState: TViewport) => {
    if (typeof onViewportChange === "function") {
      onViewportChange(viewState);
    }
  };

  const handleCoordinateClick = (coordinate: TCoordinate) => {
    if (typeof onCoordinateClick === "function") {
      onCoordinateClick(coordinate);
    }
  };

  return (
    <ReactMapGL
      {...viewport}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE}
      onMove={(evt) => handleViewportChange(evt.viewState)}
      onClick={(evt) => handleCoordinateClick(evt.lngLat)}
      onLoad={() => setLoaded(true)}
      ref={mapRef}
      style={{ width: "100%", height: "100%" }}
    >
      <DetectionCircle
        lat={35.689966}
        lng={139.754537}
        radius={km === null ? 0 : +km}
      />

      {labels.map((label) => (
        <Marker key={label.id} latitude={label.lat} longitude={label.lng}>
          <Text
            sx={{
              fontWeight: "bold",
              color: "#ffffff",
              textShadow:
                "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
            }}
            size="xl"
          >
            {label.name.toUpperCase()}
          </Text>
        </Marker>
      ))}

      {neighborhoods && (
        <Source type="geojson" data={neighborhoods}>
          <Layer
            id="neighborhoods"
            type="line"
            paint={{
              "line-color": "#290532",
              "line-width": 2,
            }}
          />
        </Source>
      )}
      {children}
    </ReactMapGL>
  );
};
