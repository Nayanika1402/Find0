import "./Hero.css";
import {useNavigate } from 'react-router-dom'
const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="heroContainer">
      <div className="heroContent">
        <h1>
          Find <span className="brandO">O .</span>
        </h1>
        <p>
          Our website is a complete package which gives access to knowledge of
          all the upcoming Events, Hackathons, Domain Expertise Guide as well as
          the required Resources for beginners to start coding.
        </p>
        <div>
          <div className="heroBtnContainer">
            <button
              className="heroBtn"
              onClick={() => {
                navigate("/explore");
              }}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
      <img
        src="https://images.squarespace-cdn.com/content/v1/5343d585e4b077ee2eda39ff/1590463143181-DSBDSZMGDG936459WKI1/sketchpost-digital-graphic-recording-infographic-video-singapore-malaysia-hong-kong.jpg"
        alt="heroImg"
      />
    </section>
  );
};

export default Hero;
