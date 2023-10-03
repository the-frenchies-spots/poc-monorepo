import React, { useCallback } from "react";

import { Loader } from "@jf/material";

import Canvas from "@/components/Canvas";
import useIsLoaded from "@/hook/useIsLoaded";
import { DrawFunction } from "@/hook/useCanvas";
import { TCharacter, drawMarioStage } from "@/utils/drawMarioStage";
import charRunGif from "./charRun.gif";

const character: TCharacter = { x: 0, y: 300, size: 50, speed: 2 };
const blocksSize = 50;
const canvasWidth = 800;
const canvasHeight = 400;

const What = () => {
  const isLoaded = useIsLoaded();

  const draw: DrawFunction = useCallback((ctx, frameCount) => {
    const { x: charX, y: charY, speed: charSpeed, size: charSize } = character;

    const { blockList, targetX } = drawMarioStage({ canvasWidth, character });

    let x = charX;
    let y = charY;

    let direction = 1;
    let isJumping = false;
    let jumpStartTime = 0;
    const jumpDuration = 500;

    const gif = new Image();
    gif.src = charRunGif.src;

    const animate = (timestamp: number) => {
      if (ctx) {
        if (!jumpStartTime) jumpStartTime = timestamp;

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        ctx.fillStyle = "yellow";
        blockList.forEach((block) => {
          ctx.fillRect(block.x, block.y, blocksSize, blocksSize);
        });

        ctx.drawImage(gif, x, y, charSize, charSize);

        x += ((targetX - x) / (charSpeed * 1000)) * direction; // 60 FPS
        y = charY;

        if (x >= targetX || x <= charX) {
          direction *= -1;
        }

        if (!isJumping) {
          blockList.forEach((block) => {
            if (x + charSize >= block.x && x <= block.x + blocksSize) {
              isJumping = true;
              jumpStartTime = timestamp;
            }
          });
        }

        if (isJumping) {
          const jumpProgress = (timestamp - jumpStartTime) / jumpDuration;
          if (jumpProgress <= 1) {
            y = y - 100 * Math.sin(jumpProgress * Math.PI);
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
  }, []);

  if (!isLoaded) return <Loader />;
  return (
    <Canvas
      draw={draw}
      width={canvasWidth}
      height={canvasHeight}
      style={{ border: "1px solid" }}
    />
  );
};

export default What;
