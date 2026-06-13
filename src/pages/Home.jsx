import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>BharatVerse</h1>

          <h2>Trend Se Pehle Discover Karo</h2>

          <p>
            India's AI-powered cultural tourism platform helping travelers
            discover hidden heritage, connect with local artisans, and explore
            authentic experiences beyond mainstream tourism.
          </p>

          <div className="hero-buttons">
            <Link to="/explore">
              <button className="primary-btn">
                Explore Heritage
              </button>
            </Link>

            <Link to="/ai-guide">
              <button className="secondary-btn">
                AI Travel Guide
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat-card">
          <h1>10+</h1>
          <p>Heritage Sites</p>
        </div>

        <div className="stat-card">
          <h1>10+</h1>
          <p>Local Artisans</p>
        </div>

        <div className="stat-card">
          <h1>3+</h1>
          <p>Cities Covered</p>
        </div>

        <div className="stat-card">
          <h1>24+</h1>
          <p>AI Hidden Gems</p>
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="features">
        <h2>Popular Destinations</h2>

        <div className="places-grid">

          <div className="place-card">
            <img
              src="https://www.micato.com/wp-content/uploads/2018/09/varanasi-9.jpg"
              alt="Varanasi"
            />

            <div className="place-content">
              <h2>Varanasi</h2>
              <p>Ancient city of temples, ghats and spirituality.</p>
            </div>
          </div>

          <div className="place-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.uB0ZXOdH_K3A6vOFaUhYlgHaFM?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Jaipur"
            />

            <div className="place-content">
              <h2>Jaipur</h2>
              <p>Explore forts, palaces and royal Rajasthan heritage.</p>
            </div>
          </div>

          <div className="place-card">
            <img
              src="https://th.bing.com/th/id/R.f45ef37ed528c19cfac7b473188c94d9?rik=Ky4E9ShXtZkW5A&riu=http%3a%2f%2fdontgetserious.com%2fwp-content%2fuploads%2f2016%2f08%2flucknow-is-beautiful.jpg&ehk=Wc5XKX%2f8Oq3IvhCXXnr%2b41vyTA35BbV2q%2bC2WKMLUXM%3d&risl=&pid=ImgRaw&r=0"
              alt="Lucknow"
            />

            <div className="place-content">
              <h2>Lucknow</h2>
              <p>Experience Nawabi culture, monuments and cuisine.</p>
            </div>
          </div>

        </div>
      </section>

      {/* WHY BHARATVERSE */}
      <section className="features">
        <h2>Why BharatVerse?</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>🏛 Hidden Heritage</h3>
            <p>
              Discover unexplored monuments, forts and heritage sites.
            </p>
          </div>

          <div className="feature-card">
            <h3>🤖 AI Guide</h3>
            <p>
              Get smart travel recommendations tailored to your interests.
            </p>
          </div>

          <div className="feature-card">
            <h3>🎨 Local Artisans</h3>
            <p>
              Support craftsmen and preserve India's cultural identity.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready To Explore India Differently?</h2>

        <p>
          Join BharatVerse and discover hidden cultural treasures before they
          become trends.
        </p>

        <Link to="/explore">
          <button className="primary-btn">
            Start Exploring
          </button>
        </Link>
      </section>
    </>
  );
}