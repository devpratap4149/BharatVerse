import artisans from "../data/artisans";
import ArtisanCard from "../components/ArtisanCard";
import { useState } from "react";

export default function Artisans() {

  const [search, setSearch] = useState("");

  const filtered = artisans.filter(
    (artisan) =>
      artisan.name.toLowerCase().includes(search.toLowerCase()) ||
      artisan.city.toLowerCase().includes(search.toLowerCase()) ||
      artisan.craft.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="artisans-page">

      <div className="artisans-header">
        <h1>Meet Indian Artisans</h1>

        <p>
          Discover skilled craftsmen preserving
          India's rich cultural heritage.
        </p>
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search artisan, city or craft..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="artisans-grid">
        {filtered.map((artisan) => (
          <ArtisanCard
            key={artisan.id}
            artisan={artisan}
          />
        ))}
      </div>

    </div>
  );
}