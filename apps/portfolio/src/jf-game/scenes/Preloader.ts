import { Scene } from "phaser";

import DudePNG from "../pictures/dude.png";

export default class Preloader extends Scene {
  constructor() {
    super("preloader");
  }

  preload() {
    this.load.image("dude", DudePNG.src);
  }

  create() {
    // Chargez l'image
    const dudeImage = this.add.image(0, 0, "dude");

    // Définissez la taille souhaitée en pixels
    const desiredWidth = 20; // Largeur souhaitée en pixels
    const desiredHeight = 20; // Hauteur souhaitée en pixels

    // Obtenez la taille d'origine de l'image "dude"
    const originalWidth = dudeImage.width;
    const originalHeight = dudeImage.height;

    // Calculez les facteurs d'échelle pour atteindre la taille souhaitée
    const scaleX = desiredWidth / originalWidth;
    const scaleY = desiredHeight / originalHeight;

    // Appliquez l'échelle à l'image
    dudeImage.setScale(scaleX, scaleY);

    // Placez l'image au centre du canevas (250, 250 pour un canevas de 500x500)
    dudeImage.setPosition(250, 250);
  }

  update() {}
}
