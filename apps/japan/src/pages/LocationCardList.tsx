import React from "react";
import { Grid, TCoordinate, TViewport } from "@jf/material";
import { JapanLocation, japanData } from "../assets/japanData";
import MapViewer from "../components/MapViewer/MapViewer";
import CardLoacation from "../components/CardLocation/CardLoacation";
import { checkCoordinatesWithinRadius } from "../utils/checkCoordinatesWithinRadius";
import Calendar from "../components/Calendar/Calendar";
import { ListRappel } from "./../components/ListRappel/ListRappel";
import { checkType } from "../utils/checkType";
import { isChecked } from "../utils/isChecked";
import { getCheckId } from "./../utils/getCheckId";

interface LocationCardListProps {
  tag: string;
  view: string;
  neighborhoods: any;
  japanData: any;
  currentPosition: TCoordinate | null;
  currentLocation: JapanLocation | null;
  onLocationChange: (data: JapanLocation) => void;
  viewport: TViewport;
  km: string | null;
  onViewportChange?: (newViewport: TViewport) => void;
  onCoordinateClick?: (coordinate: TCoordinate | undefined) => void;
  insertCheck: (id: string) => void;
  unChecked: (id: string) => void;
  checkList: checkType[];
  checkLoading: boolean;
}

const LocationCardList = React.memo(function LocationCardListCompo(
  props: LocationCardListProps
) {
  const {
    tag,
    view,
    neighborhoods,
    japanData: japanGeoJson,
    currentLocation,
    currentPosition,
    viewport,
    km,
    checkList,
    checkLoading,
    onViewportChange,
    unChecked,
    onCoordinateClick,
    onLocationChange,
    insertCheck,
  } = props;

  let filterList = japanData.filter((japanLocation) =>
    japanLocation.tag.includes(tag)
  );

  if (km && currentPosition && currentPosition.lat && currentPosition.lng) {
    filterList = filterList.filter((japanLocation) => {
      return checkCoordinatesWithinRadius(
        currentPosition.lat as number,
        currentPosition.lng as number,
        japanLocation.lat as number,
        japanLocation.lng as number,
        +km
      );
    });
  }

  return (
    <>
      {view === "calendar" && <Calendar onLocationChange={onLocationChange} />}
      {view === "listRappel" && <ListRappel />}
      {view === "map" && (
        <MapViewer
          viewport={viewport}
          neighborhoods={neighborhoods}
          japanData={japanGeoJson}
          currentLocation={currentLocation}
          currentPosition={currentPosition}
          onViewportChange={onViewportChange}
          onCoordinateClick={onCoordinateClick}
          list={filterList}
          checkList={checkList}
          onLocationChange={onLocationChange}
          km={km}
        />
      )}

      {view === "list" && (
        <Grid mt={20}>
          {filterList.map((japanLocation, key) => {
            return (
              <Grid.Col key={`grid-col-5o5o9o8ommmm${key}`} sm={12} md={4}>
                <CardLoacation
                  data={japanLocation}
                  insertCheck={insertCheck}
                  checked={isChecked(checkList, japanLocation.id)}
                  checkLoading={checkLoading}
                  unChecked={unChecked}
                  checkId={getCheckId(checkList, japanLocation.id)}
                />
              </Grid.Col>
            );
          })}
        </Grid>
      )}
    </>
  );
});

export default LocationCardList;
