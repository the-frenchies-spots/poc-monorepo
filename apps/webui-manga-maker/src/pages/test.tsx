import React, { useEffect, useRef, useState } from "react";
import SVG from "svg.js";

const width = 500;
const height = 500;

const VisageManga = () => {
  const svgRef: any = useRef(null);

  const [ML, setML] = useState<number>(200);
  const [MR, setMR] = useState<number>(100);

  const [QL, setQL] = useState<number>(100);
  const [QR, setQR] = useState<number>(50);

  const [EL, setEL] = useState<number>(310);
  const [ER, setER] = useState<number>(200);

  useEffect(() => {
    const dessin = SVG(svgRef.current).size(width, height);

    // =====================================================================
    dessin
      .rect()
      .size(width, height)
      .fill("white")
      .stroke({ color: "black", width: 2 });

    // =====================================================================

    // Dessine le contour du visage
    dessin
      .circle(200)
      .fill("white")
      .center(150, 150)
      .stroke({ color: "black", width: 2 });

    // Dessine les yeux
    dessin.circle(10).fill("black").center(
      110, // largeur
      120 // heuteur
    );
    dessin.circle(10).fill("black").center(190, 120);

    // Dessine la bouche
    dessin
      .path("M120 190 Q150 220 180 190")
      .fill("none")
      .stroke({ color: "black", width: 2 });

    const startPoint = `${ML} ${MR}`;

    const controlPoint = `${QL} ${QR}`;

    const endPoint = `${EL} ${ER}`;

    dessin
      .path(`M ${startPoint} Q ${controlPoint} ${endPoint}`)
      .fill("none")
      .stroke({ width: 2, color: "black" })
      .center(100, 100);

    // Dessine la machoire
    // dessin
    //   .path(
    //     `M2190 14775 c0 -149 111 -777 246 -1390 555 -2519 1497 -4898 2672
    //   -6750 1581 -2491 3614 -4156 6002 -4914 210 -67 454 -136 654 -185 l136 -33 0
    //   128 0 128 -37 10 c-795 202 -1396 421 -2048 748 -1044 524 -1950 1203 -2860
    //   2144 -685 708 -1356 1610 -1938 2606 -1083 1854 -1940 4180 -2421 6573 -60
    //   299 -155 835 -171 973 l-7 57 -114 0 -114 0 0 -95z`
    //   )
    //   .fill("#000000")
    //   .stroke({ color: "black", width: 2 })
    //   .attr(
    //     "transform",
    //     `translate(0.000000,1678.000000) scale(0.100000,-0.100000)`
    //   );
  }, [ML, MR, QL, QR, EL, ER]);

  const exporterSVG = () => {
    const svgElement = svgRef.current;
    const svgData = svgElement.outerHTML;

    const blob = new Blob([svgData], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "visage_manga.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <svg ref={svgRef}></svg>
      <button onClick={exporterSVG}>Exporter en SVG</button>

      <br />
      <label>ML :</label>
      <input
        value={ML}
        type="number"
        onChange={(e) => setML(+e.target.value)}
      />
      <br />

      <br />
      <label>MR :</label>
      <input
        value={MR}
        type="number"
        onChange={(e) => setMR(+e.target.value)}
      />
      <br />

      <br />
      <label>QL :</label>
      <input
        value={QL}
        type="number"
        onChange={(e) => setQL(+e.target.value)}
      />
      <br />

      <br />
      <label>QR :</label>
      <input
        value={QR}
        type="number"
        onChange={(e) => setQR(+e.target.value)}
      />
      <br />

      <br />
      <label>EL :</label>
      <input
        value={EL}
        type="number"
        onChange={(e) => setEL(+e.target.value)}
      />
      <br />

      <br />
      <label>ER :</label>
      <input
        value={ER}
        type="number"
        onChange={(e) => setER(+e.target.value)}
      />
      <br />
    </div>
  );
};

export default VisageManga;
