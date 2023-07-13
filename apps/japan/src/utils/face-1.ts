import { FaceElements } from "@/types";

import faceImage from "../assets/images/face.png";
import noseImage from "../assets/images/nose.png";
import mouthImage from "../assets/images/mouth.png";
import hairImage from "../assets/images/hair.png";
import neckImage from "../assets/images/neck.png";
import eyeRightImage from "../assets/images/eyeRight.png";
import eyeLeftImage from "../assets/images/eyeLeft.png";

export const faceElements: FaceElements = {
  neck: {
    src: neckImage.src,
    width: neckImage.width,
    height: neckImage.height,
    size: 100,
    x: 0,
    y: 85,
  },
  face: {
    src: faceImage.src,
    width: faceImage.width,
    height: faceImage.height,
    size: 100,
    x: 0,
    y: 0,
  },
  heir: {
    src: hairImage.src,
    width: hairImage.width,
    height: hairImage.height,
    size: 100,
    x: 0,
    y: -10,
  },
  nose: {
    src: noseImage.src,
    width: noseImage.width,
    height: noseImage.height,
    size: 100,
    x: 0,
    y: 35,
  },
  mouth: {
    src: mouthImage.src,
    width: mouthImage.width,
    height: mouthImage.height,
    size: 100,
    x: 4,
    y: 55,
  },
  eyeRight: {
    src: eyeRightImage.src,
    width: eyeRightImage.width,
    height: eyeRightImage.height,
    size: 100,
    x: -32,
    y: 10,
  },
  eyeLeft: {
    src: eyeLeftImage.src,
    width: eyeLeftImage.width,
    height: eyeLeftImage.height,
    size: 100,
    x: 32,
    y: 10,
  },
};

export const face1 = {
  faceElements,
  faceImageSrc: faceImage.src,
};
