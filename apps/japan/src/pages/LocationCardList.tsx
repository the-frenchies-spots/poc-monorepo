import React from "react";
import {
  Badge,
  Button,
  Card,
  Grid,
  Group,
  Image,
  ScrollArea,
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
  onLocationChange: (data: JapanLocation) => void;
}

const LocationCardList = (props: LocationCardListProps) => {
  const { tag, view, neighborhoods, onLocationChange } = props;
  return (
    <>
      {view === "map" && (
        <MapViewer
          neighborhoods={neighborhoods}
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
