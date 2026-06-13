import { useState } from "react";
import places from "../data/places";
import PlaceCard from "../components/PlaceCard";
import MapView from "../components/MapView";

export default function Explorer() {
  const [search, setSearch] = useState("");

  const savePlace = (place) => {
  console.log("Saving:", place);

  const favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

  favorites.push(place);

  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );

  alert("Added to Favorites ❤️");
};
  const filtered = places.filter(
    (place) =>
      place.name.toLowerCase().includes(search.toLowerCase()) ||
      place.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="explore-page">

      <div className="explore-header">
        <h1>Discover Hidden Heritage</h1>

        <p>
          Explore India's hidden cultural gems,
          ancient forts, spiritual ghats and historic landmarks.
        </p>
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search by city or place..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

    <MapView places={filtered} />
      <div className="places-grid">
        {filtered.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>

    </div>
  );
}