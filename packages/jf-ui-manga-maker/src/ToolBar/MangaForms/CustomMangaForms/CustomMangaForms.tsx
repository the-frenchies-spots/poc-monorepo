import React, { useEffect } from "react";

import type { TMangaFaceKeys, TSvgElement } from "@jf/types";
import { useCloudinary } from "@jf/hooks";
import { Box } from "@jf/material";
import { formatCloudinaryToSvgElement } from "@jf/utils";

import SelectSvg from "../../SelectSvg/SelectSvg";
import ParamsTabs from "../../ParamsTabs/ParamsTabs";
import GenderTabs from "../../GenderTabs/GenderTabs";
import useMangaFace from "../../../useMangaFace/useMangaFace";
import PositionSlider from "../../PositionSlider/PositionSlider";
import ProportionSlider from "../../ProportionSlider/ProportionSlider";
import useProportionChange from "../../../useProportionChange/useProportionChange";
import usePageSize from "../../../usePageSize/usePageSize";

// ----------------------------------------------------------------

interface CustomMangaFormsProps {
  typeOf: TMangaFaceKeys;
}

const CustomMangaForms = (props: CustomMangaFormsProps) => {
  const { typeOf } = props;

  const { pageSize } = usePageSize();
  const { mangaFace, onChangeOne, onValuesChange } = useMangaFace();
  const { onIncrementZoom, onDecrementZoom } = useProportionChange();
  const [getImagesFolder, { data, loading }] = useCloudinary();

  useEffect(() => {
    console.log({ pageSize });
    if (pageSize > 0) {
      getImagesFolder(typeOf);
    }
  }, [pageSize]);

  useEffect(() => {
    if (pageSize > 0) {
      const res = formatCloudinaryToSvgElement(data, pageSize);
      console.log({ res });
    }
  }, [data]);

  if (pageSize <= 0) return null;
  const svgElement: TSvgElement | undefined = mangaFace[typeOf];

  const handleChange = (value: TSvgElement | undefined) => {
    onChangeOne(typeOf, value);
  };

  const handleValueChange = (fieldName: string, value: any) => {
    onValuesChange(typeOf, fieldName, value);
  };

  const handleIncrementZoom = (zoom: number) => {
    onIncrementZoom(typeOf, zoom);
  };

  const handleDecrementZoom = (zoom: number) => {
    onDecrementZoom(typeOf, zoom);
  };

  return (
    <Box h="100%">
      {!loading && (
        <GenderTabs
          malePanel={
            <SelectSvg
              rows={formatCloudinaryToSvgElement(data, pageSize)}
              value={mangaFace[typeOf]}
              onChange={handleChange}
            />
          }
          womanPanel={
            <SelectSvg
              rows={formatCloudinaryToSvgElement(data, pageSize)}
              value={mangaFace[typeOf]}
              onChange={handleChange}
            />
          }
          bothPanel={
            <SelectSvg
              rows={formatCloudinaryToSvgElement(data, pageSize)}
              value={mangaFace[typeOf]}
              onChange={handleChange}
            />
          }
        >
          {svgElement && (
            <ParamsTabs
              resizePanel={
                <ProportionSlider
                  value={svgElement}
                  onProportionChange={handleValueChange}
                  onIncrementZoom={handleIncrementZoom}
                  onDecrementZoom={handleDecrementZoom}
                />
              }
              positionPanel={
                <PositionSlider
                  onValueChange={handleValueChange}
                  x={svgElement.x}
                  y={svgElement.y}
                />
              }
            />
          )}
        </GenderTabs>
      )}
    </Box>
  );
};

export default CustomMangaForms;
