import {
  MapContainer,
  TileLayer,
  Polygon,
  Marker,
  Polyline,
  useMap,
} from "react-leaflet";
import borderData from "../data/border";
import { useEffect, useState } from "react";
import { layerGroup, L } from "leaflet";
// leafletPip.pointInLayer(point, layer L.GeoJSON, [first])

function Map(props) {
  const [point, setPoint] = useState([props.lat, props.long]);
  const [zoom, setZoom] = useState(8);

  let vtOutline = borderData.geometry.coordinates[0].map((coords) => [
    coords[1],
    coords[0],
  ]);

  function zoomInOut(props) {
    let zoom = MapContainer.zoom;

    console.log(MapContainer.zoom);
  }
  zoomInOut();

  // useEffect(() => {

  //   //turn border data into a L.geoJson
  //   //import random Lat and long data here

  //   //then set up leaflet pip to a vareble
  //   // set up and if else lodgic to check result
  //   //leaflet pip will return an array if the point is in the geo json the array will have the geo json in it. and the array will be empty if it is not in vermont

  // }, [])

  function Map(props) {
    const [point, setPoint] = useState;
  }

  return (
    <MapContainer
      center={props.center}
      zoom={8}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      zoomControl={false}
      touchZoom={false}
      style={{ height: "600px", width: "600px" }}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
      />
      <Marker position={props.center} />
      <Polygon
        positions={vtOutline}
        pathOptions={{ color: "orange", fillOpacity: 0 }}
      />
    </MapContainer>
  );
}

export default Map;
