export default function About() {
  return (
    <div className="about-page">

      <div className="about-hero">
        <h1>About BharatVerse</h1>

        <p>
          BharatVerse is an AI-powered cultural discovery platform
          designed to help travelers uncover hidden heritage sites,
          connect with local artisans, and experience authentic India.
        </p>
      </div>

      <div className="about-section">

        <div className="about-card">
          <h2>🏛 Our Mission</h2>

          <p>
            Promote India's rich cultural heritage and empower
            local communities through sustainable tourism.
          </p>
        </div>

        <div className="about-card">
          <h2>🤖 AI Powered</h2>

          <p>
            Smart travel recommendations based on user interests,
            location, and cultural preferences.
          </p>
        </div>

        <div className="about-card">
          <h2>🎨 Support Artisans</h2>

          <p>
            Connect travelers directly with skilled artisans
            and traditional craftspeople.
          </p>
        </div>

      </div>

      <div className="impact-section">

        <h2>Impact We Aim To Create</h2>

        <div className="impact-grid">

          <div className="impact-card">
            <h1>50+</h1>
            <p>Hidden Heritage Sites</p>
          </div>

          <div className="impact-card">
            <h1>100+</h1>
            <p>Local Artisans</p>
          </div>

          <div className="impact-card">
            <h1>20+</h1>
            <p>Cities Covered</p>
          </div>

          <div className="impact-card">
            <h1>500+</h1>
            <p>AI Journeys Generated</p>
          </div>

        </div>

      </div>

    </div>
  );
}