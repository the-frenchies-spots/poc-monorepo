import { CloudinaryImage, TSvgElement } from "@jf/types";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max * 9999);
}

export const formatCloudinaryToSvgElement = (
  data: CloudinaryImage[],
  pageSize: number
): TSvgElement[] => {
  return data.map(({ url, width, height }, index) => {
    const widthRatio = (width * pageSize) / height;
    const currentWidth = (widthRatio * 100) / pageSize;

    return {
      id: getRandomInt(index + 1),
      genderType: "male",
      x: 0,
      y: 0,
      width: currentWidth,
      height: 100,
      path: url,
    };
  });
};
