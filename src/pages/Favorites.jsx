import { useEffect, useState } from "react";
import PlaceCard from "../components/PlaceCard";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(saved);
  }, []);

  return (
    <div className="explore-page">
      <div className="explore-header">
        <h1>My Favorites ❤️</h1>
        <p>Your saved heritage places</p>
      </div>

      <div className="places-grid">
        {favorites.length === 0 ? (
          <h2>No favorites added yet.</h2>
        ) : (
          favorites.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))
        )}
      </div>
    </div>
  );
}