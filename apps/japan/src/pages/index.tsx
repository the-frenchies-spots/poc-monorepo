import { useCallback, useState, useEffect } from "react";
import Head from "next/head";
import LocationCardList from "./LocationCardList";
import { Drawer } from "../components/Drawer/Drawer";
import { JapanLocation } from "../assets/japanData";
import neighborhoods from "./api/tokyo.json";
import { useMapBox } from "@jf/material";
import { useGeoloc } from "@jf/hooks";
import { RecenterViewport } from "../components/RecenterViewport/RecenterViewport";
import React from "react";

const zoomKm = {
  1: 13,
  3: 12,
  5: 11,
  10: 10,
  15: 9,
  20: 9,
  25: 8,
  30: 8,
  35: 8,
  40: 8,
};

export default function Home({
  neighborhoodsData,
}: {
  neighborhoodsData: any;
}) {
  const [currentTag, setCuurentTag] = useState<string | null>("");
  const [view, setView] = useState<string>("map");
  const [km, setKm] = useState<string | null>(null);
  const [currentLocation, setCurrentLocation] = useState<JapanLocation | null>(
    null
  );

  const { location: currentPosition, getLocation } = useGeoloc();

  const [fetch, { viewport, onViewportChange, onCoordinateClick }] =
    useMapBox();

  const handleKmChange = (km: string | null) => {
    setKm(km === "" || null ? null : km);
  };
  useEffect(() => {
    if (km) {
      onViewportChange((current) => ({
        ...current,
        latitude: 35.689966,
        longitude: 139.754537,
        zoom: zoomKm[+km],
        transitionDuration: 1000,
      }));
    }
  }, [km]);

  const SetCurrentLocationToViewPortClick = useCallback(() => {
    getLocation();
    onViewportChange((current) => {
      if (!currentPosition) return current;
      return {
        ...current,
        latitude: currentPosition?.lat,
        longitude: currentPosition?.lng,
        zoom: 12,
        transitionDuration: 1000,
      };
    });
  }, [currentPosition]);

  return (
    <>
      <Head>
        <title>JAPAN</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Drawer
          onTagChange={setCuurentTag}
          tag={currentTag || ""}
          onViewChange={setView}
          view={view}
          currentLocation={currentLocation}
          onCurrentLocationChange={setCurrentLocation}
          km={km}
          onKmChange={handleKmChange}
        />

        <LocationCardList
          tag={currentTag || ""}
          view={view}
          viewport={viewport}
          km={km}
          currentPosition={currentPosition}
          onViewportChange={onViewportChange}
          onCoordinateClick={onCoordinateClick}
          onLocationChange={setCurrentLocation}
          currentLocation={currentLocation}
          neighborhoods={neighborhoodsData}
        />

        {currentPosition && (
          <RecenterViewport onClick={SetCurrentLocationToViewPortClick} />
        )}
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      neighborhoodsData: neighborhoods,
    },
  };
}
