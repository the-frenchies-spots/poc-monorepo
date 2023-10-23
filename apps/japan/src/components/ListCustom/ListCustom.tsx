import React, { useEffect, useState } from "react";
import { callLambdaInNext } from "../../utils/fetcher";
import { spotType } from "../../utils/spotCustomType";
import { MapBoxMarker } from "@jf/material";
import { MarkerCustom } from "./marker";
import { JapanLocation } from "../../assets/japanData";

interface ListCustomProps {
  data: spotType[];
  onLocationChange: (data: JapanLocation) => void;
}

const ListCustom = (props: ListCustomProps) => {
  const { data = [], onLocationChange } = props;

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
      {data?.map((item, index) => (
        <MapBoxMarker
          key={`custom-${index}`}
          lat={item.lat}
          lng={item.lng}
          isDefaultCursor={true}
          onPress={() => handleClick(item)}
        >
          <MarkerCustom style={{ marginBottom: 40 }} item={item} />
        </MapBoxMarker>
      ))}
    </>
  );
};

export default ListCustom;
