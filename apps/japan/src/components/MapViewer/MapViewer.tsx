import React, { useEffect, useState } from "react";

import {
  Box,
  MapBox,
  MapBoxMarker,
  Modal,
  TCoordinate,
  TViewport,
  useDisclosure,
} from "@jf/material";
import { MapPinDefault, MapPinChecked } from "@jf/icons";

import { JapanLocation } from "../../assets/japanData";
import { CurrentLocationMarker } from "./CurrentLocationMarker/CurrentLocationMarker";

import { tagList } from "../../utils/tagList";
import SpotForm from "../SpotForm/SpotForm";
import ListCustom from "../ListCustom/ListCustom";
import { spotType } from "../../utils/spotCustomType";
import { callLambdaInNext } from "../../utils/fetcher";
import { checkType } from "../../utils/checkType";
import { isChecked } from "../../utils/isChecked";

interface MapViewerProps {
  list: JapanLocation[];
  neighborhoods: any;
  currentLocation: JapanLocation | null;
  viewport: TViewport;
  japanData: any;
  km: string | null;
  checkList: checkType[];
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
    checkList,
    onLocationChange,
  } = props;

  const [opened, { open, close }] = useDisclosure(false);
  const [customSpot, setCustomSpot] = useState<TCoordinate | undefined>(
    undefined
  );

  const handleClick = () => {
    open();
  };

  const [data, setData] = useState<spotType[]>([]);

  const refetch = () => {
    setCustomSpot(undefined);
    callLambdaInNext("/read", "GET", null).then((result) => {
      console.log({ result });
      setData(result.data);
    });
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
      <Modal opened={opened} onClose={close} title="Custom Spot" fullScreen>
        {customSpot && (
          <SpotForm
            coordinates={customSpot}
            onClose={close}
            refetch={refetch}
          />
        )}
      </Modal>
      <MapBox
        viewport={viewport}
        onViewportChange={onViewportChange}
        onCoordinateClick={setCustomSpot}
        neighborhoods={neighborhoods}
        japanData={japanData}
        currentPosition={currentPosition}
        km={km}
      >
        {customSpot && (
          <MapBoxMarker
            onPress={handleClick}
            lat={customSpot.lat}
            lng={customSpot.lng}
            isDefaultCursor={false}
          />
        )}

        <ListCustom
          data={data}
          onLocationChange={onLocationChange}
          checkList={checkList}
        />
        {currentPosition && currentPosition.lat && currentPosition.lng && (
          <MapBoxMarker
            lat={currentPosition.lat}
            lng={currentPosition.lng}
            isDefaultCursor={false}
          >
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

          if (isChecked(checkList, location.id)) {
            Icon = MapPinChecked;
          }

          return (
            <MapBoxMarker
              key={`${
                index +
                Math.floor(Math.random() * (583486438 - 9698 + 1)) +
                9698
              }`}
              lat={location?.lat || 0}
              lng={location?.lng || 0}
              onPress={() => onLocationChange(location)}
              style={{ paddingBottom: 43 }}
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
