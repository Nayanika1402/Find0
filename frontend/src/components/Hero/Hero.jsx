import "./Hero.css";

const Hero = () => {
  return (
    <section className="heroContainer">
      <div className="heroContent">
        <h1>
          Find <span className="brandO">O .</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, beatae
          ab dolor voluptatibus omnis ipsa Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Autem quisquam aut aspernatur! Qui,
          vitae maiores.
        </p>
        <div>
          <div className="heroBtnContainer">
            <button className="heroBtn">Explore</button>
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
