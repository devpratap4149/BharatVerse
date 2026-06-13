// import { Link } from "react-router-dom";

// export default function PlaceCard({ place }) {
//   return (
//     <div className="place-card">

//       <img
//         src={place.image}
//         alt={place.name}
//       />

//       <div className="place-content">

//         <span className="city-tag">
//           📍 {place.city}
//         </span>

//         <h2>{place.name}</h2>

//         <p>{place.description}</p>

//         <Link to={`/place/${place.id}`}>
//           <button>
//             View Details
//           </button>
//         </Link>


//        <button onClick={() => savePlace(place)}>
//   ❤️ Save
// </button>

//       </div>

//     </div>
//   );
// }



import { Link } from "react-router-dom";

export default function PlaceCard({ place }) {
  const savePlace = () => {
    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const alreadySaved = favorites.find(
      (item) => item.id === place.id
    );

    if (alreadySaved) {
      alert("Already added to Favorites ❤️");
      return;
    }

    favorites.push(place);

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );

    alert("Added to Favorites ❤️");
  };

  return (
    <div className="place-card">
      <img src={place.image} alt={place.name} />

      <div className="place-content">
        <span className="city-tag">📍 {place.city}</span>

        <h2>{place.name}</h2>

        <p>{place.description}</p>

        <Link to={`/place/${place.id}`}>
          <button>View Details</button>
        </Link>

        <button onClick={savePlace}>
          ❤️ Save
        </button>
      </div>
    </div>
  );
}