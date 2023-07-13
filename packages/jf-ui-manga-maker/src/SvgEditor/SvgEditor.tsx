import React, { useState } from "react";
import { TSvgElement } from "@jf/types";

//----------------------------------------------------------------

interface SvgEditorProps {}

export const SvgEditor = (props: SvgEditorProps) => {
  const {} = props;

  const [svgs, setSvgs] = useState<TSvgElement[]>([
    {
      id: 1,
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      path: "https://res.cloudinary.com/db00tntyg/image/upload/v1688134597/Manga/hzzmjyc9t1vete7usmpu.svg",
    },
    {
      id: 2,
      x: 100,
      y: 100,
      width: 50,
      height: 50,
      path: "https://res.cloudinary.com/db00tntyg/image/upload/v1688134573/Manga/whhhmmfpvomvb8kovkle.svg",
    },
    {
      id: 3,
      x: 120,
      y: 120,
      width: 30,
      height: 30,
      path: "https://res.cloudinary.com/db00tntyg/image/upload/v1688134772/Manga/n76enlqy3s3vv1lyqscp.svg",
    },
    {
      id: 4,
      x: 100,
      y: 150,
      width: 60,
      height: 30,
      path: "https://res.cloudinary.com/db00tntyg/image/upload/v1688134622/Manga/wtmggngcqu8zmrbrpe91.svg",
    },
    // ... autres objets SVG
  ]);

  const handleSvgPositionChange = (
    id: number,
    property: keyof TSvgElement,
    value: number
  ) => {
    setSvgs((prevSvgs) => {
      const updatedSvgs = prevSvgs.map((svg) => {
        if (svg.id === id) {
          return { ...svg, [property]: value };
        }
        return svg;
      });
      return updatedSvgs;
    });
  };

  const handleSvgSizeChange = (
    id: number,
    property: keyof TSvgElement,
    value: number
  ) => {
    setSvgs((prevSvgs) => {
      const updatedSvgs = prevSvgs.map((svg) => {
        if (svg.id === id) {
          return { ...svg, [property]: value };
        }
        return svg;
      });
      return updatedSvgs;
    });
  };

  const handleDownloadSvg = () => {
    // Générer le SVG global en utilisant les informations de l'état
    const mergedSvg = `
      <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="100%" height="100%" fill="white" />
        ${svgs
          .map(
            (svg) =>
              `<image x="${svg.x}" y="${svg.y}" width="${svg.width}" height="${svg.height}" xlink:href="${svg.path}" />`
          )
          .join("")}
      </svg>
    `;

    // Télécharger le SVG global
    const downloadLink = document.createElement("a");
    downloadLink.href = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
      mergedSvg
    )}`;
    downloadLink.download = "merged.svg";
    downloadLink.click();
  };

  return (
    <div>
      <div className="svg-editor">
        <svg width="500" height="500">
          {/* Afficher les SVG superposés en utilisant les informations de l'état */}
          {svgs.map((svg) => (
            <image
              key={svg.id}
              x={svg.x}
              y={svg.y}
              width={svg.width}
              height={svg.height}
              xlinkHref={svg.path}
            />
          ))}
        </svg>
      </div>
      <div className="controls">
        <h3>Position et taille des SVG</h3>
        {/* Modifier les coordonnées X et Y ainsi que la taille des SVG */}
        {svgs.map((svg) => (
          <div key={svg.id}>
            <h4>SVG {svg.id}</h4>
            <label>
              Position X:
              <input
                type="number"
                value={svg.x}
                onChange={(e) =>
                  handleSvgPositionChange(svg.id, "x", Number(e.target.value))
                }
              />
            </label>
            <label>
              Position Y:
              <input
                type="number"
                value={svg.y}
                onChange={(e) =>
                  handleSvgPositionChange(svg.id, "y", Number(e.target.value))
                }
              />
            </label>
            <label>
              Largeur:
              <input
                type="number"
                value={svg.width}
                onChange={(e) =>
                  handleSvgSizeChange(svg.id, "width", Number(e.target.value))
                }
              />
            </label>
            <label>
              Hauteur:
              <input
                type="number"
                value={svg.height}
                onChange={(e) =>
                  handleSvgSizeChange(svg.id, "height", Number(e.target.value))
                }
              />
            </label>
          </div>
        ))}
        {/* Bouton pour télécharger le SVG global */}
        <button onClick={handleDownloadSvg}>Télécharger le SVG</button>
      </div>
    </div>
  );
};
