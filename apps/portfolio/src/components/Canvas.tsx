import React from "react";
import useCanvas, { DrawFunction, Options } from "@/hook/useCanvas";

interface CanvasHTMLAttributes<T> extends React.HTMLAttributes<T> {
  height?: number | string;
  width?: number | string;
}

interface CanvasProps<T> extends CanvasHTMLAttributes<T> {
  draw: DrawFunction;
  options?: Options;
}

const Canvas = (props: CanvasProps<HTMLCanvasElement>) => {
  const { draw, options, ...other } = props;
  //   const { context, ...moreConfig } = options;
  const canvasRef = useCanvas(draw);

  return <canvas ref={canvasRef} {...other} />;
};

export default Canvas;
