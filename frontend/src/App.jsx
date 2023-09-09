import './styles/App.css'
import Navbar from './components/Header/Navbar'
import Home from './pages/Home'
import Explore from './components/Explore/Explore'
import Register from './components/Register/Register'
import {Route,Routes} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import TCard from './cards/TechEvents Cards/TCard'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/card" element={<TCard/>} />

      </Routes>
    </>
  );
}

export default App
