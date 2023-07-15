import React from "react";
import { Source, Layer } from "react-map-gl";
import * as turf from "@turf/turf";

const DetectionCircle = ({ lat, lng, radius }) => {
  var center = [lng, lat];

  var options = { steps: 50, units: "kilometers", properties: { foo: "bar" } };
  var circle = turf.circle(center, radius, options);
  var line = turf.lineString(...circle.geometry.coordinates);

  return (
    <div>
      <div style={{ position: "absolute", bottom: 200, left: 100 }}></div>
      <Source id="my-data" type="geojson" data={circle}>
        <Layer
          id="point-90-hi"
          type="fill"
          paint={{
            "fill-color": "#088",
            "fill-opacity": 0.1,
          }}
        />
      </Source>

      <Source id="my-ata" type="geojson" data={line}>
        <Layer
          id="point-9-hi"
          type="line"
          paint={{
            "line-color": "#3F3979",
            "line-width": 2,
          }}
        />
      </Source>
    </div>
  );
};

export default DetectionCircle;
