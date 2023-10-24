import React, { useEffect, useState } from "react";
import { callLambdaInNext } from "../../utils/fetcher";
import { spotType } from "../../utils/spotCustomType";
import { MapBoxMarker } from "@jf/material";
import { MapPinChecked } from "@jf/icons";
import { MarkerCustom } from "./marker";
import { JapanLocation } from "../../assets/japanData";
import { checkType } from "../../utils/checkType";
import { isChecked } from "../../utils/isChecked";

interface ListCustomProps {
  data: spotType[];
  onLocationChange: (data: JapanLocation) => void;
  checkList: checkType[];
}

const ListCustom = (props: ListCustomProps) => {
  const { data = [], onLocationChange, checkList } = props;

  const handleClick = (item: spotType) => {
    onLocationChange({
      id: item._id,
      tag: item.tag,
      name: item.name,
      description: item.description,
      city: "",
      picture: item.picture,
      links: [],
      address: `${item.lat},${item.lng}`,
      price: "",
      lat: item.lat,
      lng: item.lng,
    });
  };

  return (
    <>
      {data?.map((item, index) => {
        if (isChecked(checkList, item._id))
          return (
            <MapBoxMarker
              key={`custom-123-${index}`}
              lat={item.lat}
              lng={item.lng}
              isDefaultCursor={true}
              onPress={() => handleClick(item)}
            >
              <MapPinChecked size={50} style={{ marginBottom: 40 }} />
            </MapBoxMarker>
          );
        return (
          <MapBoxMarker
            key={`custom-368466858-a-y-${index}`}
            lat={item.lat}
            lng={item.lng}
            isDefaultCursor={true}
            onPress={() => handleClick(item)}
          >
            <MarkerCustom style={{ marginBottom: 40 }} item={item} />
          </MapBoxMarker>
        );
      })}
    </>
  );
};

export default ListCustom;
