import { useState, useEffect } from "react";
import { TCoordinate } from "@jf/types";

export const useGeoloc = () => {
  const [location, setLocation] = useState<TCoordinate | null>({
    lat: 35.689966,
    lng: 139.754537,
  });

  const getLocation = () => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
        }
      );
      return watchId;
    } else {
      console.error(
        "La géolocalisation n'est pas prise en charge par votre navigateur."
      );
      return null;
    }
  };

  useEffect(() => {
    const watchId: any = getLocation();
    // Nettoyage de l'écouteur lors du démontage du composant
    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

  return { location, getLocation };
};
