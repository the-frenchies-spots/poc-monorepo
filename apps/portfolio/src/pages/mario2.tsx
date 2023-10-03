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
  const animationDuration = 1; // in seconds
  const canvasWidth = 800;
  const canvasHeight = 100;
  const squareWidth = 50;
  const targetX = canvasWidth - squareWidth;

  // Yellow square properties
  const yellowSquareWidth = 50;
  const numberOfYellowSquares = 2;
  const spaceBetweenYellowSquares =
    (canvasWidth - numberOfYellowSquares * yellowSquareWidth) /
    (numberOfYellowSquares + 1);

  // Initial position of yellow squares
  const yellowSquares: SquareProps[] = Array.from(
    { length: numberOfYellowSquares },
    (_, index) => ({
      x: spaceBetweenYellowSquares * (index + 1) + yellowSquareWidth * index,
      y: 0,
    })
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let x = initialX;
    let y = initialY;
    let direction = 1; // 1 for moving right, -1 for moving left
    let isJumping = false; // Flag to check if the square is jumping
    let jumpStartTime = 0; // Timestamp of the jump start
    const jumpDuration = 500; // Duration of the jump in milliseconds

    const animate = (timestamp: number) => {
      if (!jumpStartTime) jumpStartTime = timestamp;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw yellow squares
      ctx.fillStyle = "yellow";
      yellowSquares.forEach((square) => {
        ctx.fillRect(square.x, square.y, 50, 50);
      });

      // Draw the square
      ctx.fillStyle = "red";
      ctx.fillRect(x, y, 50, 50);

      // Calculate the next position
      x += ((targetX - initialX) / (animationDuration * 1000)) * direction; // 60 FPS
      y = initialY;

      // Check for collision with the right boundary
      if (x >= targetX || x <= initialX) {
        // If collision, change the direction
        direction *= -1;
      }

      // Check for collision with yellow squares
      if (!isJumping) {
        yellowSquares.forEach((square) => {
          if (
            x + squareWidth >= square.x &&
            x <= square.x + yellowSquareWidth
          ) {
            isJumping = true;
            jumpStartTime = timestamp;
          }
        });
      }

      // Jump logic
      if (isJumping) {
        const jumpProgress = (timestamp - jumpStartTime) / jumpDuration;
        if (jumpProgress <= 1) {
          y = initialY - 100 * Math.sin(jumpProgress * Math.PI);
        } else {
          isJumping = false;
        }
      }

      requestAnimationFrame(animate);
    };

    animate(0);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={canvasWidth}
      height={canvasHeight}
      style={{ border: "1px solid #000" }}
    />
  );
};

export default CanvasAnimation;
