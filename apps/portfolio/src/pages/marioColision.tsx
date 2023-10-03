import { Box, Loader } from "@jf/material";
import { useEffect, useRef, useState } from "react";

import useIsLoaded from "@/hook/useIsLoaded";
import picture from "./1.png";
import { TCharacter, drawMarioStage } from "@/utils/drawMarioStage";

const character: TCharacter = { x: 0, y: 250, size: 50, speed: 2 };

const blocksSize = 50;
const canvasWidthInit = 1000;
const canvasHeightInit = 400;

const CanvasAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<any>(null);

  const isLoaded = useIsLoaded();

  const [canvasWidth, setWidth] = useState<number | undefined>(canvasWidthInit);
  const [canvasHeight, setHeight] = useState<number | undefined>(
    canvasHeightInit
  );

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef?.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        console.log({ clientWidth, clientHeight });
        setWidth(clientWidth);
        setHeight(clientHeight);
      }
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [isLoaded, containerRef]);

  useEffect(() => {
    if (
      isLoaded &&
      canvasRef.current &&
      canvasWidth !== undefined &&
      canvasHeight !== undefined
    ) {
      const {
        x: initialX,
        y: initialY,
        speed: animationDuration,
        size: squareWidth,
      } = character;

      const { blockList: yellowSquares, targetX } = drawMarioStage({
        canvasWidth,
        character,
      });

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      let x = initialX;
      let y = initialY;
      let direction = 1; // 1 for moving right, -1 for moving left
      let isJumping = false; // Flag to check if the square is jumping
      let jumpStartTime = 0; // Timestamp of the jump start
      const jumpDuration = 500; // Duration of the jump in milliseconds

      // Charger l'image une seule fois au chargement de la composante
      const gif = new Image();
      gif.src = picture.src;

      // Nouvelle fonction pour gérer la collision avec les blocs
      const handleCollision = (x: number, y: number) => {
        yellowSquares.forEach((square) => {
          if (
            x + squareWidth >= square.x &&
            x <= square.x + square.size &&
            y + squareWidth >= square.y &&
            y <= square.y + square.size
          ) {
            square.size += 10;
            setTimeout(() => {
              square.size -= 10;
            }, 2000);
          }
        });
      };

      // Boucle d'animation
      const animate = (timestamp: number) => {
        if (ctx) {
          if (!jumpStartTime) jumpStartTime = timestamp;

          ctx.clearRect(0, 0, canvasWidth, canvasHeight);

          ctx.fillStyle = "yellow";
          yellowSquares.forEach((square) => {
            ctx.fillRect(square.x, square.y, square.size, square.size);
          });

          ctx.drawImage(gif, x, y, squareWidth, squareWidth);

          x += ((targetX - initialX) / (animationDuration * 1000)) * direction; // 60 FPS
          y = initialY;

          if (x >= targetX || x <= initialX) {
            direction *= -1;
          }

          if (!isJumping) {
            yellowSquares.forEach((square) => {
              if (x + squareWidth >= square.x && x <= square.x + square.size) {
                isJumping = true;
                jumpStartTime = timestamp;

                // Gérer la collision avec les blocs
                handleCollision(x, y);
              }
            });
          }

          if (isJumping) {
            const jumpProgress = (timestamp - jumpStartTime) / jumpDuration;
            if (jumpProgress <= 1) {
              y = initialY - 100 * Math.sin(jumpProgress * Math.PI);
            } else {
              isJumping = false;
            }
          }

          requestAnimationFrame(animate);
        }
      };

      gif.onload = () => {
        animate(0);
      };

      // Appel initial de la boucle d'animation
      animate(0);

      // Nettoyage de la boucle d'animation lors du démontage du composant
      return () => {
        cancelAnimationFrame(animate);
      };
    }
  }, [isLoaded, canvasWidth]);

  if (!isLoaded) return <Loader />;
  return (
    <Box
      ref={containerRef}
      sx={{
        width: canvasWidthInit,
        height: canvasHeightInit,
        border: "1px solid #000",
      }}
    >
      <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
    </Box>
  );
};

export default CanvasAnimation;
