import React, { useState, useCallback } from "react";

import Axios from "axios";

import { TViewport } from "./viewport-type";
import { TCoordinate } from "./coordinate-type";

const API = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_MAPBOX_API_URL,
});
// 35.867019, 137.950139
const japanViewPort = {
  bearing: 0,
  latitude: 35.867019,
  longitude: 137.950139,
  padding: { top: 0, bottom: 0, left: 0, right: 0 },
  pitch: 0,
  zoom: 5,
};

export const useMapBox = (defaultViewport = japanViewPort) => {
  const [localePlace, setLocalePlace] = useState({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [viewport, setViewport] = useState<TViewport>(defaultViewport);
  const [coordinate, setCoordinate] = useState<TCoordinate | undefined>(
    undefined
  );

  const callGeocoding = useCallback((keyWord: string) => {
    setLoading(true);
    return API.get(
      `${keyWord}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`
    )
      .then((response) => {
        const res = {
          place_name: response.data.features[0].place_name,
          coordinates: response.data.features[0].geometry.coordinates,
        };
        setLocalePlace(res);
        setLoading(false);
        return res;
      })
      .catch((error) => setError(error));
  }, []);

  return [
    callGeocoding,
    {
      loading,
      error,
      localePlace,
      viewport,
      coordinate,
      onCoordinateClick: setCoordinate,
      onViewportChange: setViewport,
    },
  ] as const;
};
