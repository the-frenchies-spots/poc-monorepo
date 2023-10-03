import React, { useEffect, useRef } from "react";
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";
import image4 from "./4.png";
import image5 from "./5.png";
import image6 from "./6.png";
import image7 from "./7.png";
import image8 from "./8.png";
import image9 from "./9.png";
import image10 from "./10.png";

// Chargez les 10 images
const imageSources = [
  image1,
  image2,
  image3,
  image4,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const AnimatedGifCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const imagePromises = imageSources.map((sprite) => {
      return new Promise((resolve) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.src = sprite.src;
      });
    });

    Promise.all(imagePromises).then((images) => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      const drawImage = (index: number) => {
        const current = imageSources[index];
        const coef = 3;
        const w = current.width * coef;
        const h = current.height * coef;

        context.clearRect(0, 0, w + 20, h + 20);
        context.drawImage(images[index], 0, 0, w, h);

        setTimeout(() => {
          drawImage((index + 1) % images.length);
        }, 100);
      };

      drawImage(0);
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ border: "1px solid" }}
      width={800}
      height={400}
    />
  );
};

export default AnimatedGifCanvas;
