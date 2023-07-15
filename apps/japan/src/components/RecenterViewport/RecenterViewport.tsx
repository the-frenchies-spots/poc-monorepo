import React from "react";

import { ActionIcon, Box } from "@jf/material";

interface MySvgProps {
  onClick?: () => void;
}

export const RecenterViewport = (props: MySvgProps) => {
  const { onClick } = props;

  return (
    <Box
      p="md"
      m="xl"
      sx={{
        position: "fixed",
        bottom: 80,
        right: 0,
        zIndex: 100,
        borderRadius: 50,
        border: "1px solid gray",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
        backgroundColor: "white",
      }}
    >
      <ActionIcon onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 -960 960 960"
          width="48"
        >
          <path
            d="M450-42v-75q-137-14-228-105T117-450H42v-60h75q14-137 105-228t228-105v-75h60v75q137 14 228 105t105 228h75v60h-75q-14 137-105 228T510-117v75h-60Zm30-134q125 0 214.5-89.5T784-480q0-125-89.5-214.5T480-784q-125 0-214.5 89.5T176-480q0 125 89.5 214.5T480-176Zm0-154q-63 0-106.5-43.5T330-480q0-63 43.5-106.5T480-630q63 0 106.5 43.5T630-480q0 63-43.5 106.5T480-330Zm0-60q38 0 64-26t26-64q0-38-26-64t-64-26q-38 0-64 26t-26 64q0 38 26 64t64 26Zm0-90Z"
            fill="blue"
          />
        </svg>
      </ActionIcon>
    </Box>
  );
};
