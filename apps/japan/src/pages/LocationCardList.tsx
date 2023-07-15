import React from "react";
import {
  Badge,
  Button,
  Card,
  Grid,
  Group,
  Image,
  ScrollArea,
  TCoordinate,
  TViewport,
  Text,
} from "@jf/material";
import { JapanLocation, japanData } from "../assets/japanData";
import { IconMapPin } from "@jf/icons";
import MapViewer from "../components/MapViewer/MapViewer";
import CardLoacation from "../components/CardLocation/CardLoacation";

interface LocationCardListProps {
  tag: string;
  view: string;
  neighborhoods: any;
  currentLocation: JapanLocation | null;
  onLocationChange: (data: JapanLocation) => void;
  viewport: TViewport;
  onViewportChange?: (newViewport: TViewport) => void;
  onCoordinateClick?: (coordinate: TCoordinate | undefined) => void;
}

const LocationCardList = (props: LocationCardListProps) => {
  const {
    tag,
    view,
    neighborhoods,
    currentLocation,
    viewport,
    onViewportChange,
    onCoordinateClick,
    onLocationChange,
  } = props;
  return (
    <>
      {view === "map" && (
        <MapViewer
          viewport={viewport}
          onViewportChange={onViewportChange}
          onCoordinateClick={onCoordinateClick}
          neighborhoods={neighborhoods}
          currentLocation={currentLocation}
          list={japanData.filter((japanLocation) =>
            japanLocation.tag.includes(tag)
          )}
          onLocationChange={onLocationChange}
        />
      )}
      {view === "list" && (
        <Grid mt={20}>
          {japanData
            .filter((japanLocation) => {
              return japanLocation.tag.includes(tag);
            })
            .map((japanLocation, key) => {
              return (
                <Grid.Col key={key} sm={12} md={4}>
                  <CardLoacation data={japanLocation} />
                </Grid.Col>
              );
            })}
        </Grid>
      )}
    </>
  );
};
export default LocationCardList;
