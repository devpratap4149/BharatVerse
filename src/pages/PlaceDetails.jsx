// import { useParams } from "react-router-dom";
// import places from "../data/places";

// export default function PlaceDetails() {
//   const { id } = useParams();

//   const place = places.find(
//     (p) => p.id === Number(id)
//   );

//   if (!place) {
//     return <h1>Place Not Found</h1>;
//   }

//   return (
//     <div className="details-page">

//       <img
//         src={place.image}
//         alt={place.name}
//         className="details-image"
//       />

//       <h1>{place.name}</h1>

//       <h3>{place.city}</h3>

//       <p>{place.description}</p>

//       <div className="details-box">
//         <h2>History</h2>

//         <p>
//           This heritage site is an important cultural
//           landmark of India and attracts travelers,
//           historians and cultural enthusiasts.
//         </p>
//       </div>

//     </div>
//   );
// }

import { useParams } from "react-router-dom";
import places from "../data/places";

export default function PlaceDetails() {
  const { id } = useParams();

  const place = places.find((p) => p.id === Number(id));

  if (!place) {
    return <h1>Place Not Found</h1>;
  }

  return (
    <div className="details-page">
      <img
        src={place.image}
        alt={place.name}
        className="details-image"
      />

      <h1>{place.name}</h1>

      <h3>{place.city}</h3>

      <p>{place.description}</p>

      <div className="details-box">
        <h2>History</h2>

        <p>
          This heritage site is an important cultural landmark of India and
          attracts travelers, historians and cultural enthusiasts.
        </p>
      </div>

      <div className="model-section">
        <h2>3D Heritage View</h2>
        <p>Explore Ramnagar Fort in an interactive 3D view.</p>

        <model-viewer
          src="/models/ramnagar_fort.glb"
          alt="Ramnagar Fort 3D Model"
          auto-rotate
          camera-controls
          shadow-intensity="1"
          style={{
            width: "100%",
            height: "500px",
            background: "#111827",
            borderRadius: "20px",
          }}
        ></model-viewer>
      </div>
    </div>
  );
}