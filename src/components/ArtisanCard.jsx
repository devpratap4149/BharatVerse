export default function ArtisanCard({ artisan }) {
  return (
    <div className="artisan-card">

      <img
        src={artisan.image}
        alt={artisan.name}
      />

      <div className="artisan-content">

        <h2>{artisan.name}</h2>

        <p className="craft-tag">
          🎨 {artisan.craft}
        </p>

        <p>
          📍 {artisan.city}
        </p>

        <p>
          ⭐ {artisan.experience}
        </p>

        <button>
          View Profile
        </button>

      </div>

    </div>
  );
}