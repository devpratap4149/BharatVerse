// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/explore">Explore</Link>
//       <Link to="/artisans">Artisans</Link>
//       <Link to="/ai-guide">AI Guide</Link>
//       <Link to="/about">About</Link>
//       <Link to="/login">Login</Link>
//       <Link to="/signup">Signup</Link>
//       <Link to="/favorites">Favorites</Link>
//     </nav>
//   );
// }

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <img src={logo} alt="BharatVerse" />
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/artisans">Artisans</Link>
        <Link to="/ai-guide">AI Guide</Link>
        <Link to="/about">About</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>

    </nav>
  );
}