import { useState } from "react";

export default function AIGuide() {
  const [city, setCity] = useState("");
  const [interest, setInterest] = useState("");
  const [trip, setTrip] = useState(null);

  const generateTrip = () => {
    if (!city || !interest) {
      setTrip({
        title: "⚠ Please select both city and interest",
        places: [],
        time: "-",
        bestTime: "-"
      });
      return;
    }

    const data = {
      Varanasi: {
        History: {
          title: "Hidden Historical Varanasi 🏺",
          places: [
            { name: "Darbhanga Ghat Palace View", why: "Royal architecture hidden behind crowded ghats." },
            { name: "Ramnagar Fort Riverside Backside", why: "Real historic vibe is in silent river-facing corners." },
            { name: "Chunar Fort (nearby)", why: "Underrated fort with raw Mughal + British history." }
          ],
          time: "5 Hours",
          bestTime: "Morning"
        },

        Food: {
          title: "Hidden Food Gems of Varanasi 🍲",
          places: [
            { name: "Deena Chaat Bhandar (local lanes)", why: "Authentic taste, not commercial tourist stalls." },
            { name: "Kachori Gali small shops", why: "Old Varanasi breakfast culture hidden in narrow streets." },
            { name: "Malaiyo sellers (winter only)", why: "Traditional sweet only locals know about." }
          ],
          time: "3–4 Hours",
          bestTime: "Morning / Winter"
        },

        Spiritual: {
          title: "Secret Spiritual Corners ✨",
          places: [
            { name: "Assi Ghat early morning yoga zone", why: "Peaceful spiritual energy before crowd arrives." },
            { name: "Kedar Ghat hidden temples", why: "Small shrines most tourists never enter." },
            { name: "Nepali Temple wooden structure", why: "Unique architecture unlike typical temples." }
          ],
          time: "4 Hours",
          bestTime: "Sunrise / Evening"
        }
      },

      Lucknow: {
        History: {
          title: "Underrated Nawabi History 🏰",
          places: [
            { name: "British Residency quiet gardens", why: "Main ruins are famous, but gardens are peaceful and historic." },
            { name: "La Martiniere College", why: "One of India’s most ignored architectural gems." },
            { name: "Old Chowk heritage lanes", why: "Real Lucknow exists in hidden narrow streets." }
          ],
          time: "5 Hours",
          bestTime: "Evening"
        },

        Food: {
          title: "Hidden Lucknow Food Trails 🍢",
          places: [
            { name: "Rahim’s Nihari corner shop", why: "No branding, but legendary taste among locals." },
            { name: "Aminabad early food lanes", why: "Original kebab culture before tourist commercialization." },
            { name: "Tunday Kababi back counters", why: "Hidden preparation style locals prefer." }
          ],
          time: "4 Hours",
          bestTime: "Night"
        },

        Shopping: {
          title: "Underrated Lucknow Markets 🛍",
          places: [
            { name: "Chowk back alleys", why: "Handcrafted items directly from artisans." },
            { name: "Aminabad hidden stalls", why: "Cheaper + more authentic than main market." },
            { name: "Local embroidery workshops", why: "Real chikankari work done behind shops." }
          ],
          time: "4 Hours",
          bestTime: "Evening"
        }
      },

      Jaipur: {
        History: {
          title: "Hidden Royal Jaipur 👑",
          places: [
            { name: "Panna Meena Ka Kund (early morning)", why: "Beautiful stepwell, peaceful before tourists arrive." },
            { name: "Amber village back streets", why: "Real local life beyond Amer Fort." },
            { name: "Nahargarh hidden trails", why: "Best views without tourist crowd." }
          ],
          time: "5–6 Hours",
          bestTime: "Morning"
        },

        Shopping: {
          title: "Secret Jaipur Shopping 🛍",
          places: [
            { name: "Sireh Deori hidden stalls", why: "Less crowded traditional craft sellers." },
            { name: "Block printing workshops", why: "Live handmade textile creation process." },
            { name: "Blue pottery local houses", why: "Authentic artisans, not showroom products." }
          ],
          time: "4 Hours",
          bestTime: "Evening"
        }
      }
    };

    const cityData = data[city];
    const selected = cityData?.[interest];

    if (selected) {
      setTrip(selected);
    } else {
      setTrip({
        title: "🌍 Hidden Gem Explorer Mode",
        places: [
          { name: `${city} Local Streets`, why: "Real culture lives here, not tourist spots." },
          { name: `${city} Old Markets`, why: "Authentic local lifestyle experience." },
          { name: `${city} Riverside Areas`, why: "Peaceful underrated locations." }
        ],
        time: "3–5 Hours",
        bestTime: "Flexible"
      });
    }
  };

  return (
    <div className="ai-page">

      <div className="ai-header">
        <h1> BharatVerse AI Guide</h1>
        <p>Discover India’s hidden and underrated gems 🌿</p>
      </div>

      <div className="ai-form">

        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Select City</option>
          <option value="Varanasi">Varanasi</option>
          <option value="Lucknow">Lucknow</option>
          <option value="Jaipur">Jaipur</option>
        </select>

        <select value={interest} onChange={(e) => setInterest(e.target.value)}>
          <option value="">Select Interest</option>
          <option value="History">History</option>
          <option value="Food">Food</option>
          <option value="Spiritual">Spiritual</option>
          <option value="Shopping">Shopping</option>
        </select>

        <button onClick={generateTrip}>
          Discover Hidden Gems ✨
        </button>

      </div>

      {trip && (
        <div className="trip-card">

          <h2>{trip.title}</h2>

          <h3>Underrated Places</h3>

          <ul>
            {trip.places.map((place, index) => (
              <li key={index}>
                <b>{place.name}</b>
                <br />
                <span>{place.why}</span>
              </li>
            ))}
          </ul>

          <p>⏱ Estimated Time: {trip.time}</p>
          <p>🌤 Best Time: {trip.bestTime}</p>

        </div>
      )}

    </div>
  );
}