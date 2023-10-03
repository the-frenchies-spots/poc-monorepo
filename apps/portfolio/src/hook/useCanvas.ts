import { useEffect, MutableRefObject } from "react";

type CanvasContextType =
  | "2d"
  | "webgl"
  | "webgl2"
  | "bitmaprenderer"
  | "experimental-webgl"
  | "webgpu";

export type DrawFunction = (
  context: CanvasRenderingContext2D,
  frameCount: number
) => void;

export interface Options {
  context?: CanvasContextType;
}

const useCanvas = (draw: DrawFunction, options: Options = {}) => {
  const canvasRef: MutableRefObject<HTMLCanvasElement | null> = {
    current: null,
  };

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext(
        options?.context || "2d"
      ) as CanvasRenderingContext2D;

      if (context) {
        let frameCount = 0;
        let animationFrameId: number;

        const render = () => {
          frameCount++;
          draw(context, frameCount);
          animationFrameId = window.requestAnimationFrame(render);
        };

        render();

        return () => {
          window.cancelAnimationFrame(animationFrameId);
        };
      }
    }
  }, [draw]);
  return canvasRef;
};

export default useCanvas;
