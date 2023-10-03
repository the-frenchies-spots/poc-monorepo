import React, { useEffect, useState } from "react";

const useIsLoaded = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    return () => {
      setIsLoaded(false); // Cleanup function to set isLoaded to false when unmounting
    };
  }, []);

  return isLoaded;
};

export default useIsLoaded;
