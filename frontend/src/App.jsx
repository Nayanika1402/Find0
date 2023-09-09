import "./styles/App.css";
import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home";
import Explore from "./components/Explore/Explore";
import Register from "./components/Register/Register";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TCard from "./cards/TechEvents Cards/TCard";
import Hackathons from "./components/Hackathons/Hackathons";
import Internship from "./components/Internships/Internship";
import Events from "./components/Events/Events";
import Footer from "./components/footer/Footer";
import { GlobalStateProvider } from "./states/GlobalStates";
import Content from "./components/content/Content";
function App() {
  return (
    <>
      <GlobalStateProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/card" element={<TCard />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/internships" element={<Internship />} />
          <Route path="/events" element={<Events />} />
          <Route path="/content" element={<Content />} />
        </Routes>
        <Footer />
      </GlobalStateProvider>
    </>
  );
}

export default App;
