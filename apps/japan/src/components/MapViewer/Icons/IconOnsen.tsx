import React from "react";

interface IconOnsenProps {
  size: number;
  style: Record<string, any>;
}

const IconOnsen = (props: IconOnsenProps) => {
  const { size, style } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 -960 960 960"
      width={size}
      style={style}
    >
      <path d="M283-440q4-17 5.5-28t1.5-22q0-33-15-57.5T241-598q-26-36-37.5-69.5T192-737q0-14 1.5-28t5.5-35h60q-4 21-5.5 33.5T252-741q0 29 11 56t38 65q26 37 37.5 68t11.5 64q0 14-1.5 25.5T343-440h-60Zm160 0q4-17 5.5-28t1.5-22q0-33-15-57.5T401-598q-26-36-37.5-69.5T352-737q0-14 1.5-28t5.5-35h60q-3 16-5.5 29.5T411-741q0 29 11 56t38 65q26 37 37.5 68t11.5 64q0 15-1.5 26t-4.5 22h-60Zm160 0q4-17 5.5-28t1.5-22q0-33-15-57.5T561-598q-26-36-37.5-69.5T512-737q0-14 1.5-28t5.5-35h60q-3 16-5.5 29.5T571-741q0 29 11 56t38 65q26 37 37.5 68t11.5 64q0 15-1.5 26t-4.5 22h-60ZM480-160q-150 0-255-58.5T120-359q0-38 25.5-71.5T220-492v74q-20 14-30 28.5T180-359q0 52 93 95.5T480-220q114 0 207-43.5t93-95.5q0-17-10.5-32T740-418v-74q49 28 74.5 61.5T840-359q0 82-105 140.5T480-160Z" />
    </svg>
  );
};

export default IconOnsen;
