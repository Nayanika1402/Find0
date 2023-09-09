import "./Footer.css";
const Footer = () => {
  return (
    <section className="footer">
      <footer>
        <div className="footerContainer">
          <div className="footerDiv">
            <img
              src="https://img.freepik.com/free-vector/cute-penguin-waving-hand-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-4654.jpg?w=360"
              alt=""
            />
            <h1>Find 0</h1>
          </div>
          <div className="footerDiv">
            <p>Home</p>
            <p>Explore</p>
            <p>Resources</p>
          </div>
          <div className="footerDiv">
            <p>Hackathons</p>
            <p>Internships</p>
            <p>Tech Events</p>
          </div>
          <div className="footerDiv iconss">
            <p>
              <i className="fa-brands fa-facebook"></i>
            </p>
            <p>
              <i className="fa-brands fa-linkedin"></i>
            </p>
            <p>
              <i className="fa-brands fa-github"></i>
            </p>
          </div>
        </div>
        <p className="credit">Create With 💚 By Puskar , Nayanika , Pujan , Shuvadeep .</p>
      </footer>
    </section>
  );
};

export default Footer;
