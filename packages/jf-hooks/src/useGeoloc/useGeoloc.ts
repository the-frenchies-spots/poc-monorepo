import { useState, useEffect } from "react";
import { TCoordinate } from "@jf/types";

export const useGeoloc = () => {
  const [location, setLocation] = useState<TCoordinate | null>(null);

  useEffect(() => {
    let watchId: any;

    const getLocation = () => {
      if (navigator.geolocation) {
        watchId = navigator.geolocation.watchPosition(
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
      } else {
        console.error(
          "La géolocalisation n'est pas prise en charge par votre navigateur."
        );
      }
    };

    getLocation();

    // Nettoyage de l'écouteur lors du démontage du composant
    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

  return location;
};
