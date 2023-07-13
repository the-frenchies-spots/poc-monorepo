import React from "react";

import { TSvgElement } from "@jf/types";
import { Box } from "@jf/material";

import SelectSvg from "./../../SelectSvg/SelectSvg";
import useMangaFace from "../../../useMangaFace/useMangaFace";
import ProportionSlider from "./../../ProportionSlider/ProportionSlider";
import useProportionChange from "../../../useProportionChange/useProportionChange";
import GenderTabs from "./../../GenderTabs/GenderTabs";
import ParamsTabs from "./../../ParamsTabs/ParamsTabs";
import PositionSlider from "./../../PositionSlider/PositionSlider";

const list: TSvgElement[] = [
  {
    id: 1,
    name: "head1",
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    path: "https://res.cloudinary.com/db00tntyg/image/upload/v1688311469/Manga/zqry9t6fat5grc12ugyu.png",
  },
  {
    id: 2,
    name: "head2",
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    path: "https://res.cloudinary.com/db00tntyg/image/upload/v1688311469/Manga/zqry9t6fat5grc12ugyu.png",
  },
  {
    id: 3,
    name: "head3",
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    path: "https://res.cloudinary.com/db00tntyg/image/upload/v1688311469/Manga/zqry9t6fat5grc12ugyu.png",
  },
  {
    id: 4,
    name: "head4",
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    path: "https://res.cloudinary.com/db00tntyg/image/upload/v1688311469/Manga/zqry9t6fat5grc12ugyu.png",
  },
  {
    id: 5,
    name: "head5",
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    path: "https://res.cloudinary.com/db00tntyg/image/upload/v1688311469/Manga/zqry9t6fat5grc12ugyu.png",
  },
  {
    id: 6,
    name: "head6",
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    path: "https://res.cloudinary.com/db00tntyg/image/upload/v1688311469/Manga/zqry9t6fat5grc12ugyu.png",
  },
  {
    id: 7,
    name: "head7",
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    path: "https://res.cloudinary.com/db00tntyg/image/upload/v1688311469/Manga/zqry9t6fat5grc12ugyu.png",
  },
  {
    id: 8,
    name: "head8",
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    path: "https://res.cloudinary.com/db00tntyg/image/upload/v1688311469/Manga/zqry9t6fat5grc12ugyu.png",
  },
  {
    id: 9,
    name: "head9",
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    path: "https://res.cloudinary.com/db00tntyg/image/upload/v1688311469/Manga/zqry9t6fat5grc12ugyu.png",
  },
  {
    id: 10,
    name: "head10",
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    path: "https://res.cloudinary.com/db00tntyg/image/upload/v1688311469/Manga/zqry9t6fat5grc12ugyu.png",
  },
];

const HeadForms = () => {
  const { mangaFace, onChangeOne, onValuesChange } = useMangaFace();
  const { onIncrementZoom, onDecrementZoom } = useProportionChange();

  const handleChange = (value: TSvgElement | undefined) => {
    onChangeOne("head", value);
  };

  const handleValueChange = (fieldName: string, value: any) => {
    onValuesChange("head", fieldName, value);
  };

  const handleIncrementZoom = (zoom: number) => {
    onIncrementZoom("head", zoom);
  };

  const handleDecrementZoom = (zoom: number) => {
    onDecrementZoom("head", zoom);
  };

  return (
    <Box h="100%">
      <GenderTabs
        malePanel={
          <SelectSvg
            rows={list}
            value={mangaFace.head}
            onChange={handleChange}
          />
        }
        womanPanel={
          <SelectSvg
            rows={list}
            value={mangaFace.head}
            onChange={handleChange}
          />
        }
        bothPanel={
          <SelectSvg
            rows={list}
            value={mangaFace.head}
            onChange={handleChange}
          />
        }
      >
        {mangaFace.head && (
          <ParamsTabs
            resizePanel={
              <ProportionSlider
                value={mangaFace.head}
                onProportionChange={handleValueChange}
                onIncrementZoom={handleIncrementZoom}
                onDecrementZoom={handleDecrementZoom}
              />
            }
            positionPanel={
              <PositionSlider
                onValueChange={handleValueChange}
                x={mangaFace.head.x}
                y={mangaFace.head.y}
              />
            }
          />
        )}
      </GenderTabs>
    </Box>
  );
};

export default HeadForms;
