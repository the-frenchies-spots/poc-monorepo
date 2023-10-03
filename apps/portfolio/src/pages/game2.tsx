import React from "react";
import { usePhaserGame } from "@/hook/use-phaser";

const config: Phaser.Types.Core.GameConfig = {
  title: "phaser-test-game",
  width: 500,
  height: 500,
};

const Game2 = () => {
  const { game } = usePhaserGame(config);
  return <div></div>;
};

export default Game2;
