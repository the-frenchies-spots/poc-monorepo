import React, { memo, useEffect, useRef, useState } from "react";
import { type Game as GameType } from "phaser";
import { Box } from "@jf/material";

const gameId = "game-content";

const initPhaser = async (
  parent: HTMLDivElement | null
): Promise<GameType | null> => {
  const Phaser = await import("phaser");
  //   const { default: Preloader } = await import(
  //     "../jf-game/scenes/Preloader"
  //   );

  if (!parent) return null;
  const game = new Phaser.Game({
    type: Phaser.AUTO,
    title: "phaser-test-game",
    //  parent,
    width: 500,
    height: 500,
    scene: {
      preload: () => {},
      create: () => {},
      update: () => {},
    },
  });

  return game;
};

const Game = memo(function GameApp() {
  const [game, setGame] = useState<GameType | null>();
  const gameContainerRef = useRef<HTMLDivElement | null>(null);

  const cleanScene = () => {
    if (game) {
      game.destroy(true);
    }
  };

  useEffect(() => {
    cleanScene();

    console.log("=================================");
    console.log({ gameContainerRef });
    console.log("=================================");
    //
    if (gameContainerRef.current) {
      initPhaser(gameContainerRef.current).then(setGame);
    }
    //
    return () => {
      cleanScene();
    };
  }, [gameContainerRef]);

  return <Box ref={gameContainerRef} id={gameId} key={gameId} />;
});

export default Game;
