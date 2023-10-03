import React, { useEffect, useMemo, useRef } from "react";
import { type Game as GameType } from "phaser";

const loadPhaser = async (
  config: Phaser.Types.Core.GameConfig
): Promise<GameType | null> => {
  const Phaser = await import("phaser");
  const { default: Preloader } = await import("../jf-game/scenes/Preloader");
  return new Phaser.Game({ ...config, type: Phaser.AUTO, scene: [Preloader] });
};

export const usePhaserGame = (config: Phaser.Types.Core.GameConfig) => {
  const phaserGameRef = useRef<GameType | null>(null);

  const cleanScene = () => {
    if (phaserGameRef?.current) {
      phaserGameRef.current.destroy(true);
      phaserGameRef.current = null;
    }
  };

  useEffect(() => {
    if (phaserGameRef?.current) cleanScene();
    loadPhaser(config).then((result) => (phaserGameRef.current = result));
    return () => cleanScene();
  }, []);

  return { game: phaserGameRef?.current };
};
