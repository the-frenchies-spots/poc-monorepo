import { DrawFunction } from "@/hook/useCanvas";

export interface TCharacter {
  x: number;
  y: number;
  size: number;
  speed: number;
}

export interface TDrawMarioStageParams {
  character: TCharacter;
  canvasWidth: number;
}

const numberOfBlocks = 5; // Vous pouvez changer cette valeur pour obtenir un nombre différent de blocs
const spaceBetweenBlocks = 120;
const blockWidth = 50; // Vous pouvez changer cette valeur pour ajuster la largeur des blocs

export const drawMarioStage = (params: TDrawMarioStageParams) => {
  const { character, canvasWidth } = params;

  const { size: charSize } = character;

  // Animation properties
  const targetX = canvasWidth - charSize;

  // Calcule la largeur totale des blocs avec les espaces entre eux
  const totalWidth =
    numberOfBlocks * blockWidth + (numberOfBlocks - 1) * spaceBetweenBlocks;

  // Calcule la position de départ pour que les blocs soient centrés
  const startX = canvasWidth / 2 - totalWidth / 2;

  // Crée le tableau d'objets représentant les blocs
  const blockList = Array(numberOfBlocks)
    .fill(0)
    .map((_, index) => ({
      x: startX + index * (blockWidth + spaceBetweenBlocks),
      y: 150,
    }));

  return { blockList, startX, totalWidth, targetX };
};
