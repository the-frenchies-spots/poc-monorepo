import { Box, Loader } from "@jf/material";
import { useEffect, useRef, useState } from "react";

import useIsLoaded from "@/hook/useIsLoaded";
import picture from "./1.png";
import { TCharacter, drawMarioStage } from "@/utils/drawMarioStage";

const character: TCharacter = { x: 0, y: 300, size: 50, speed: 2 };

const blocksSize = 50;
const canvasWidthInit = 1000;
const canvasHeightInit = 400;

const detectCollision = (
  characterX: number,
  characterY: number,
  characterSize: number,
  blockX: number,
  blockY: number,
  blockSize: number
) => {
  if (
    characterX + characterSize >= blockX && // Right side of character overlaps left side of block
    characterX <= blockX + blockSize && // Left side of character overlaps right side of block
    characterY + characterSize >= blockY && // Bottom side of character overlaps top side of block
    characterY <= blockY + blockSize // Top side of character overlaps bottom side of block
  ) {
    return true; // Collision detected
  }
  return false; // No collision
};

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

      const animate = (timestamp: number) => {
        if (ctx) {
          if (!jumpStartTime) jumpStartTime = timestamp;

          ctx.clearRect(0, 0, canvasWidth, canvasHeight);

          ctx.fillStyle = "yellow";
          yellowSquares.forEach((square) => {
            if (
              detectCollision(x, y, squareWidth, square.x, square.y, blocksSize)
            ) {
              console.log("Collision detected with a block!");
              // Vous pouvez ajouter ici tout traitement à effectuer lorsqu'une collision est détectée
            }
            ctx.fillRect(square.x, square.y, blocksSize, blocksSize);
          });

          ctx.drawImage(gif, x, y, squareWidth, squareWidth);

          x += ((targetX - initialX) / (animationDuration * 1000)) * direction; // 60 FPS
          y = initialY;

          if (x >= targetX || x <= initialX) {
            direction *= -1;
          }

          if (!isJumping) {
            yellowSquares.forEach((square) => {
              if (x + squareWidth >= square.x && x <= square.x + blocksSize) {
                isJumping = true;
                jumpStartTime = timestamp;
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

      animate(0);
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
