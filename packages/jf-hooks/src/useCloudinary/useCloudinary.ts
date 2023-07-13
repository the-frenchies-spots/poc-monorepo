import { useState } from "react";
import { CloudinaryImage } from "@jf/types";

export const useCloudinary = () => {
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>("");

  const getImagesFolder = async (
    folderName: string
  ): Promise<CloudinaryImage[]> => {
    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:3000/api/fetchCloudinary",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ folderName }),
        }
      );

      const data = await response.json();
      setLoading(false);
      if (response.ok) {
        setImages(data);
        return data;
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      setError(error);
      console.error("Une erreur s'est produite :", error);
      return [];
    }
  };

  return [getImagesFolder, { data: images, loading, error }] as const;
};
