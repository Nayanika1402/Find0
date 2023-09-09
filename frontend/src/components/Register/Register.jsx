import "./Register.css";
const Register = () => {
  return (
    <section>
      <div className="rloginTextContainer">
        <h1 className="rloginText">
          Register <span>Here</span>
        </h1>
        <p className="rwelcomeText">
          Join
          <span className="black">
            Find <span className="red">O</span>
          </span>
        </p>
      </div>
      <div className="rloginOuterContainer">
        <img
          src="https://camo.githubusercontent.com/a4c584bce1c41271485d28f92aaf9f581b3c88b68ca723b6edfd58b4ba988c2b/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313138373833362f73637265656e73686f74732f363533393432392f70726f6772616d65722e676966"
          alt=""
        />
        <div className="rloginContent">
          <form className="rloginForm">
            <div className="rloginInputs">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter Your Name..." />
            </div>
            <div className="rloginInputs">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="number"
                id="phone"
                placeholder="Enter Your Phone No..."
              />
            </div>
            <div className="rloginInputs">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email..."
              />
            </div>
            <div className="rloginInputs">
              <label htmlFor="collage">University/Collage</label>
              <input
                type="text"
                id="collage"
                placeholder="Enter Your Collage..."
              />
            </div>
            <div className="rloginInputs">
              <label htmlFor="course">Course</label>
              <input
                type="text"
                id="course"
                placeholder="Enter Your Course..."
              />
            </div>
            <div className="rloginInputs">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Your Password..."
              />
            </div>
            <div className="rloginInputs">
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="password"
                id="cpassword"
                placeholder="Enter Your Confirm Password..."
              />
            </div>
            <div className="rloginButtonContainer">
              <button className="rloginButton">Register</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
