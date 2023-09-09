import './About.css'

const About = () => {
  return (
    <div>
      <section className="features" id="features">
        <h1 className="heading">Features</h1>

        <div className="box-container">
          <div className="box">
            <i className="fas fa-magic"></i>
            <h3>User Friendly</h3>
            <p>
              {" "}
              It is easy to navigate,visually appealing,and intuitive to use.
              Additionally,it prioritize accessibility,making information and
              features readily available to the users.
            </p>
          </div>
          <div className="box">
            <i className="fas fa-shield-alt"></i>
            <h3>Intuitive Navigation</h3>
            <p>
              A website does not function without logical navigation. Our
              website provides clear view of the navigation bar with suitable
              titles making it easy for the users.
            </p>
          </div>
          <div className="box">
            <i className="fas fa-globe"></i>
            <h3>Quality Content</h3>
            <p>
              Our website is designed to provide high quality content that is
              both accurate and reliable,ensuring that the content we present is
              up-to-date and based on credible sources.
            </p>
          </div>
          <div className="box">
            <i className="fa-sharp fa-regular fa-comments"></i>
            <h3>User Account</h3>
            <p>
              To have a track record of the users search and downloaded
              materials ,there is option for signing up. It makes the access of
              the materials easy and more feasable.
            </p>
          </div>
          <div className="box">
            <i className="fas fa-cogs"></i>
            <h3>Mobile Friendly</h3>
            <p>
              A mobile-friendly website,also known as a responsive website is
              designed in a way to provide an optimal user experience on
              smartphones and tablets.
            </p>
          </div>
          <div className="box">
            <i className="fas fa-headset"></i>
            <h3>Latest Updates</h3>
            <p>
              {" "}
              Innovate,Elevate,and Captivate!Explore our latest update and
              always stay connected with us with the newest announcements always
              available at your fingertips.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About
