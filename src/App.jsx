import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Artisans from "./pages/Artisans";
import AIGuide from "./pages/AIGuide";
import About from "./pages/About";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Favorites from "./pages/Favorites";
import PlaceDetails from "./pages/PlaceDetails";




export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        

        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/artisans" element={<Artisans />} />
        <Route path="/ai-guide" element={<AIGuide />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/place/:id" element={<PlaceDetails />}/>
        <Route path="/favorites" element={<Favorites />} />



      </Routes>
    </BrowserRouter>
  );
}

