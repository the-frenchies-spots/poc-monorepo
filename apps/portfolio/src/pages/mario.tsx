import { useEffect, useRef } from "react";

interface SquareProps {
  x: number;
  y: number;
}

const CanvasAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Initial position of the square
  const initialX = 0;
  const initialY = 50;

  // Animation properties
  const animationDuration = 8; // in seconds
  const canvasWidth = 800;
  const squareWidth = 50;
  const targetX = canvasWidth - squareWidth;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let x = initialX;
    let y = initialY;
    let direction = 1; // 1 for moving right, -1 for moving left

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the square
      ctx.fillStyle = "red";
      ctx.fillRect(x, y, 50, 50);

      // Calculate the next position
      x += ((targetX - initialX) / (animationDuration * 60)) * direction; // 60 FPS
      y = initialY;

      // Check for collision with the right boundary
      if (x >= targetX || x <= initialX) {
        // If collision, change the direction
        direction *= -1;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={canvasWidth}
      height={100}
      style={{ border: "1px solid #000" }}
    />
  );
};

export default CanvasAnimation;
