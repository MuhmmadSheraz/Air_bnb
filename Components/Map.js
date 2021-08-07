import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as geolib from "geolib";
import Image from "next/image";
const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResults?.map((result) => {
    return {
      latitude: result?.lat,
      longitude: result?.long,
    };
  });
  const center = geolib.getCenter(coordinates);
  const [viewport, setViewport] = React.useState({
    height: "100%",
    width: "100%",
    latitude: center.latitude - 0.3,
    longitude: center.longitude - 0.008,
    zoom: 10,
  });
  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      className="rounded-xl fixed h-full"
      height="100%"
      onViewportChange={(viewport) => setViewport(viewport)}
      mapStyle="mapbox://styles/muhammadsheraz/cks19nief327g18nnk2p94z87"
      mapboxApiAccessToken={process.env.mapbox_key}
    >
      {searchResults?.map((result) => {
        return (
          <div>
            <Marker
              longitude={result.long}
              latitude={result.lat}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <p
                className="text-2xl cursor-pointer transform transition duration-700 animate-bounce"
                onClick={() => setSelectedLocation(result)}
              >
                🏠
              </p>
            </Marker>
            {selectedLocation?.lat && selectedLocation?.long && (
              <Popup
                onClose={() => setSelectedLocation({})}
                closeOnClick={true}
                latitude={selectedLocation?.lat}
                longitude={selectedLocation?.long}
              >
                <div className="p-1">
                  <div className="relative h-28  w-28 ">
                    <Image src={selectedLocation.img} layout="fill" />
                  </div>
                  <p className="text-xs text-gray-500 font-semibold  truncate w-28">
                    {selectedLocation.title}
                  </p>
                </div>
              </Popup>
            )}
          </div>
        );
      })}
    </ReactMapGL>
  );
};
export default Map;
