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
import { checkCoordinatesWithinRadius } from "../utils/checkCoordinatesWithinRadius";

interface LocationCardListProps {
  tag: string;
  view: string;
  neighborhoods: any;
  currentPosition: TCoordinate | null;
  currentLocation: JapanLocation | null;
  onLocationChange: (data: JapanLocation) => void;
  viewport: TViewport;
  km: string | null;
  onViewportChange?: (newViewport: TViewport) => void;
  onCoordinateClick?: (coordinate: TCoordinate | undefined) => void;
}

const LocationCardList = (props: LocationCardListProps) => {
  const {
    tag,
    view,
    neighborhoods,
    currentLocation,
    currentPosition,
    viewport,
    km,
    onViewportChange,
    onCoordinateClick,
    onLocationChange,
  } = props;

  let filterList = japanData.filter((japanLocation) =>
    japanLocation.tag.includes(tag)
  );

  if (km) {
    filterList = filterList.filter((japanLocation) =>
      checkCoordinatesWithinRadius(
        35.689966,
        139.754537,
        japanLocation.lat as number,
        japanLocation.lng as number,
        +km
      )
    );
  }

  return (
    <>
      {view === "map" && (
        <MapViewer
          viewport={viewport}
          currentPosition={currentPosition}
          onViewportChange={onViewportChange}
          onCoordinateClick={onCoordinateClick}
          neighborhoods={neighborhoods}
          currentLocation={currentLocation}
          list={filterList}
          onLocationChange={onLocationChange}
          km={km}
        />
      )}
      {view === "list" && (
        <Grid mt={20}>
          {filterList.map((japanLocation, key) => {
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
