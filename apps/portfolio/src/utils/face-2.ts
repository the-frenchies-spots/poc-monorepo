import { FaceElements } from "@/types";

import head from "../../public/assets/ext/head/head#1/head#1.svg";
import nose from "../../public/assets/ext/nose/nose#1/nose#1.svg";

export const faceElements: FaceElements = {
  head: {
    src: head.src,
    width: head.width,
    height: head.height,
    size: 100,
    x: 0,
    y: 0,
  },
  nose: {
    src: nose.src,
    width: nose.width,
    height: nose.height,
    size: 100,
    x: 0,
    y: 0,
  },
};

export const face2 = {
  faceElements,
  faceImageSrc: head.src,
};
