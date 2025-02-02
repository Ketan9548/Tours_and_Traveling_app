import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 29.2839,
    lng: 78.8281,
  };

  return (
    <>
      <div className="w-full border-4 border-white">
        <LoadScript googleMapsApiKey="AIzaSyB0fVb6HODFUbmNVDPMbAVknr3_fwNs7sI">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
};

export default Map;
