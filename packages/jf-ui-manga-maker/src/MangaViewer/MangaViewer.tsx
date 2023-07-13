import React, { Fragment, useEffect, useRef, useState } from "react";

import { Box, Flex } from "@jf/material";
import { TSvgElement } from "@jf/types";
import { motion } from "framer-motion";

import useMangaFace from "../useMangaFace/useMangaFace";
import { useStyles } from "./MangaViewer.styles";
import usePageSize from "../usePageSize/usePageSize";

// ----------------------------------------------------------------

const variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

interface MangaViewerProps {}

const MangaViewer = (props: MangaViewerProps) => {
  const {} = props;

  const [svgParentWidth, setSvgParentWidth] = useState(0);
  const [svgParentHeight, setSvgParentHeight] = useState(0);

  const { classes } = useStyles();
  const { mangaFace } = useMangaFace();
  const { onChange } = usePageSize();
  const svgParentRef = useRef<SVGSVGElement>(null);

  const svgs: TSvgElement[] = Object.values(mangaFace);

  useEffect(() => {
    const svgParentElement = svgParentRef.current;
    if (svgParentElement) {
      const { clientWidth, clientHeight } = svgParentElement;
      setSvgParentWidth(clientWidth);
      setSvgParentHeight(clientHeight);
      onChange(clientWidth);
    }
  }, []);

  if (!svgParentRef) return null;
  return (
    <Flex w="100%" h="100%" justify="center" align="center">
      <Box w="80vh" h="80vh" className={classes.container}>
        <svg
          height="100%"
          width="100%"
          style={{ position: "relative" }}
          ref={svgParentRef}
        >
          {svgs
            .filter((_svg) => _svg !== undefined)
            .map((svg) => {
              const { id, path, x, y, width, height } = svg;
              const currentWidth = (width * svgParentWidth) / 100;
              const currentHeight = (height * svgParentHeight) / 100;

              return (
                <Fragment key={id}>
                  <motion.image
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    x={svgParentWidth / 2 - currentWidth / 2 + x}
                    y={svgParentHeight / 2 - currentHeight / 2 + y}
                    width={currentWidth}
                    height={currentHeight}
                    xlinkHref={path}
                  />
                </Fragment>
              );
            })}
        </svg>
      </Box>
    </Flex>
  );
};

export default MangaViewer;
